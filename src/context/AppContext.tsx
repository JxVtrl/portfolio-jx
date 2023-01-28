import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { GithubRepo, GithubUser } from "../interface/gh.interface";

const AppContext = createContext({});

export function AppProvider({ children }: any) {
  const [username] = useState<string>("JxVtrl");
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[] | null>(null);
  const [lastRepos, setLastRepos] = useState<GithubRepo[] | null>(null);
  const [favorites, setFavorites] = useState<GithubRepo[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleOrderByDate = (repos: GithubRepo[]) => {
    const orderedRepos = repos.sort(
      (a: any, b: any) =>
        Number(new Date(b.updated_at)) - Number(new Date(a.updated_at))
    );
    return orderedRepos;
  };

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      setError(false);

      try {
        const responseUser = await fetch(
          `https://api.github.com/users/${username}`
        );
        const user = await responseUser.json();
        setUser(user);

        const responseFavorites = await fetch(
          `https://gh-pinned-repos.egoist.dev/?username=${username}`
        );
        const favorites = await responseFavorites.json();
        setFavorites(favorites);

        const responseAllRepos = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=${user?.public_repos}`
        );
        const repos = await responseAllRepos.json();

        // Filter all projects that are not forked
        const filteredRepos = repos.filter((repo: any) => !repo.fork);

        // Order by name
        const orderedRepos = filteredRepos.sort((a: any, b: any) =>
          a.name.localeCompare(b.name)
        );

        setRepos(orderedRepos);

        // Filter only the last 10 repos
        const lastRepos = handleOrderByDate(filteredRepos).slice(0, 4);
        setLastRepos(lastRepos);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    return () => {
      getUserData();
    };
  }, []);

  useEffect(() => {
    if (user) console.log(user);
    if (repos) console.log(repos);
    if (lastRepos) console.log(lastRepos);
    if (favorites) console.log(favorites);
  }, [repos]);

  const value = {
    user,
    repos,
    lastRepos,
    favorites,
    username,
    loading,
    error,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}

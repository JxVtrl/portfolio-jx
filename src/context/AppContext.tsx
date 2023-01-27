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

  useEffect(() => {
    const getUserData = async () => {
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

      const responseRepo = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${user?.public_repos}`
      );
      const repos = await responseRepo.json();

      // Filter all projects that are not forked
      const filteredRepos = repos.filter((repo: any) => !repo.fork);
      setRepos(filteredRepos);

      // Order repos by last updated
      const orderedRepos = filteredRepos.sort(
        (a: any, b: any) => new Date(b.updated_at) - new Date(a.updated_at)
      );

      // Filter only the last 10 repos
      const lastRepos = orderedRepos.slice(0, 10);
      setLastRepos(lastRepos);
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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}

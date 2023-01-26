export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GithubRepo {
  archived: boolean;
  created_at: string;
  description: string;
  disabled: boolean;
  fork: boolean;
  forks: number;
  full_name: string;
  git_url: string;
  homepage: string;
  id: number;
  language: string;
  license: {
    key: string;
    name: string;
    url: string;
  };
  name: string;
  owner: GithubUser;
  private: boolean;
  pushed_at: string;
  releases_url: string;
  size: number;
  trees_url: string;
  updated_at: string;
  url: string;
  visibility: string;
  watchers: number;
  watchers_count: number;
}

export interface SiteMetadata {
  title: string;
  author: Author;
}

export interface Author {
  name: string;
  summary?: string;
}

export interface Post {
  id: string;
  html: string;
  excerpt: string;
  frontmatter: FrontMatter;
}

export interface Author {
  name: string;
  summary?: string;
}

export interface MDFields {
  slug: string;
}

export interface FrontMatter {
  title?: string;
  date?: string;
  description?: string;
}

export interface PostNavMetaData {
  fields: MDFields;
  frontmatter: FrontMatter;
}

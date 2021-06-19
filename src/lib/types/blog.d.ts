import { MdxComponent } from "@src/lib/utils/mdxUtils";

export interface Post {
  id: string;
  body: string;
  excerpt: string;
  frontmatter: FrontMatter;
}

export interface Tag {
  fieldValue: string;
  totalCount?: number;
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

export interface TableContent {
  url: string;
  title: string;
  items: TableContent[];
}

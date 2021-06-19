import { MdxComponent } from "@src/lib/utils/mdxUtils";

export interface Post {
  id: string;
  body: string;
  excerpt: string;
  fields: MDFields;
  frontmatter: FrontMatter;
}

export interface Tag {
  name: string;
  totalCount?: number;
  src?: string;
}

export interface MDFields {
  slug: string;
}

export interface FrontMatter {
  title?: string;
  date?: string;
  description?: string;
  tags?: any;
  thumbnail?: Thumbnail;
}

export interface Thumbnail {
  childImageSharp: {
    fluid: {
      aspectRatio: number;
      sizes: string;
      src: string;
      tracedSVG: string;
    };
  };
}

export interface PostNavMetaData {
  fields: MDFields;
  frontmatter: FrontMatter;
}

export interface ToCItem {
  url: string;
  title: string;
  items: ToCItem[];
}

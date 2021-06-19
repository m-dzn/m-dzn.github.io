import { Author } from "@src/lib/types/blog";

declare module "*.png";
declare module "*.svg";

export interface SiteMetadata {
  title: string;
  author: Author;
}

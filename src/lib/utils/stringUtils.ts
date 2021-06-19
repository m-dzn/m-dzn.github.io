import { ToCItem } from "@src/lib/types/blog";
import { ReactNode } from "react";

export const mapToKebabCase = (words: string) =>
  words
    .toLowerCase()
    .replace(
      /[^0-9a-zA-Zㄱ-힣.\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf -]/g,
      ""
    )
    .replace(/\s/g, "-")
    .replace(/--+/g, "-");

export function getStringFromChildren(children: ReactNode): string {
  return (
    children &&
    (Object.values(children).reduce((acc: string, item) => {
      return typeof item === "string" ? acc + item : acc;
    }) as string)
  );
}

export const mapHeadingTitleToId = (title: string | ReactNode) => {
  let id;
  if (typeof title === "object") {
    id = getStringFromChildren(title);
  } else {
    id = title;
  }

  return mapToKebabCase(id.replaceAll(/[<][^>]*[>]/g, ""));
};

export const removeTagsFromHeadingTitle = (title: string) =>
  title.replace(/[<][^>]*[>]/g, " ");

export function addSuffixToDuplicatedAnchors(arr: any[]) {
  const anchor = mapHeadingTitleToId(arr);
  const hasDuplicate = arr.find(item => item.anchor === anchor);
  const filtered = arr.filter(item => item.anchor.indexOf(anchor) > -1);
  const suffix =
    !hasDuplicate && filtered.length === 0 ? "" : `-${filtered.length + 1}`;

  const suffixed = `${anchor}${suffix}`;
}

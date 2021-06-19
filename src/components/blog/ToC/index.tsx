import { useScrollObserver } from "@src/lib/hooks/useScrollObserver";
import { ToCItem } from "@src/lib/types/blog";
import { removeTagsFromHeadingTitle } from "@src/lib/utils/stringUtils";
import React from "react";
import { useMemo } from "react";

interface ToCProps {
  tableOfContents?: ToCItem[];
}

function ToC({ tableOfContents }: ToCProps) {
  const targetIds = useMemo(() => {
    const ids = [];

    function getItemUrl(items: ToCItem[]) {
      if (!items) return;

      items.forEach(item => {
        ids.push(item.url.replace("#", ""));

        if (item.items) {
          getItemUrl(item.items);
        }
      });
    }

    getItemUrl(tableOfContents);

    return ids;
  }, [tableOfContents]);

  useScrollObserver(targetIds);

  const createTableContent = (items: ToCItem[]) => {
    return items.map(item => (
      <ul key={item.url}>
        <li>
          <a href={item.url} className="content-link">
            <div>{item.title && removeTagsFromHeadingTitle(item.title)}</div>
          </a>
          {item.items && createTableContent(item.items)}
        </li>
      </ul>
    ));
  };

  return (
    <div className="toc">
      {tableOfContents && createTableContent(tableOfContents)}
    </div>
  );
}

export default ToC;

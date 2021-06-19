import { ACTIVE_CLASS, TOC_CLASS } from "@src/lib/constants/cssConst";
import { useEffect, useState } from "react";

export const useScrollObserver = (itemIds: string[]) => {
  const [activeEntry, setActiveEntry] = useState(null);

  useEffect(() => {
    const elements = itemIds.map(id =>
      typeof document === "undefined" ? null : document.getElementById(id)
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.boundingClientRect.top < 0 || entry.isIntersecting) {
            setActiveEntry(entry);
          }
        });
      },
      { rootMargin: "-3% 0% -97% 0%", threshold: 0 }
    );

    elements.forEach(element => {
      observer.observe(element);
    });
    console.log("hye");

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  if (typeof document !== "undefined") {
    const anchors =
      typeof document === "undefined"
        ? null
        : document.querySelectorAll(`.${TOC_CLASS} a`);
    anchors.forEach(anchor => anchor.classList.remove(ACTIVE_CLASS));

    if (activeEntry) {
      if (
        activeEntry.boundingClientRect.top < 0 ||
        activeEntry.isIntersecting
      ) {
        document
          .querySelector(`.${TOC_CLASS} a[href="#${activeEntry.target.id}"]`)
          ?.classList.add(ACTIVE_CLASS);
      } else {
        const prevIndex = itemIds.indexOf(activeEntry.target.id) - 1;
        const prevId = itemIds[prevIndex < 0 ? undefined : prevIndex];

        if (prevId) {
          document
            .querySelector(`.${TOC_CLASS} a[href="#${prevId}"]`)
            ?.classList.add(ACTIVE_CLASS);
        }
      }
    }
  }
};

export const getElement = query =>
  typeof document === "undefined" ? null : document.querySelector(query);

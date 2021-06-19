export const resolveUrl = (...paths) =>
  paths.reduce((resolvedUrl, path) => {
    const urlPath = path.toString().trim();
    if (urlPath) {
      resolvedUrl += `/${urlPath.replace(/^\/|\/$/g, "")}`;
    }
    return resolvedUrl[0] === "/" ? resolvedUrl : `/${resolvedUrl}`;
  }, "");

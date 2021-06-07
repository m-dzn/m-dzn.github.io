import React from "react";
import Seo from "../../common/Seo";
import Header from "../../common/Header";
import "./PageTemplate.scss";

function PageTemplate({ title, description, children }) {
  return (
    <main className="page-template">
      <Seo title={title} description={description} />
      <Header title={title} />
      <div>{children}</div>
    </main>
  );
}

export default PageTemplate;

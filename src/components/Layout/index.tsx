import React, { ReactNode } from "react";
import Sidebar from "../common/Sidebar";
import Navbar from "@src/components/common/Navbar";
import { SiteMetadata } from "@src/lib/types/site";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

interface indexProps {
  pageTitle?: string;
  siteMetadata: SiteMetadata;
  children: ReactNode;
}

function Layout({ pageTitle, siteMetadata, children }: indexProps) {
  return (
    <div id="frame">
      <Sidebar />
      <div className="dashboard">
        <header className="site-header">
          <Navbar />
        </header>
        <main className="site-main">
          {pageTitle && <h1 className="main__title">{pageTitle}</h1>}
          <section className="main__contents">{children}</section>
        </main>
        <footer className="site-footer">
          Copyright &copy; 2021 {siteMetadata.author.name}
        </footer>
      </div>
    </div>
  );
}

export default Layout;

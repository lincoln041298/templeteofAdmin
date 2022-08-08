import React, { Children } from "react";
import { Footer } from "../common";
import { Header } from "../common/header";
import { Sidebar } from "../common/sidebar";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <div className="flex">
        <section className="flex-[0_0_18.5%] px-5 bg-slate-200">
          <Sidebar />
        </section>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

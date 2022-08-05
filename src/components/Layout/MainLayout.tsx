import React, { Children } from "react";
import { Footer,  } from "../common";
import { Header } from "../common/header";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header/>
      <div>{children}</div>
      <Footer />
    </div>
  );
}

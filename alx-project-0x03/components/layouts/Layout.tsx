import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24 px-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

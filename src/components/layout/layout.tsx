import { FC } from "react";
import { ReactNode } from "react";
import Footer from "./footer/footer";
import MainNavigation from "./mainNavigation/MainNavigation";

interface ChildrenType {
  children: ReactNode;
}

const Layout: FC<ChildrenType> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

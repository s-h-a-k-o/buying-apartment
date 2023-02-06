import Home from "@/components/homePage/home-page";
import { NextPage } from "next";
// import { Inter } from "@next/font/google";
// import { Roboto } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

// //with tailwindcss
// const interTailwind = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

const HomePage: NextPage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;

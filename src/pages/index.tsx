import { NextPage } from "next";
import { Inter } from "@next/font/google";
import { Roboto } from "@next/font/google";
import { Box } from "@mui/system";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

//with tailwindcss
const interTailwind = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const HomePage: NextPage = () => {
  return (
    <>
      <Box bgcolor="red">Material UI Redux Formik Yup Tailwindscc</Box>
      <div className={inter.className}>HomePage</div>
      <div className={roboto.className}>HomePage</div>
      <div className={`${interTailwind.variable} font-sans`}>HomePage</div>
    </>
  );
};

export default HomePage;

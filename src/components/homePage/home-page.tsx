import { FC } from "react";

import HomePageContent from "./meinContent/HomePageContent";
import FeaturedHouses from "./featured houses/featuredHouses";

const Home: FC = () => {
  return (
    <>
      <HomePageContent />
      <FeaturedHouses />
    </>
  );
};

export default Home;

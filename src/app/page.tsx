import { HomeHero } from "@/blocks/home-hero";
import { HomeHeroSquares } from "@/blocks/home-hero-squares";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      {/*<HomeHeroSquares />*/}
      <HomeHero />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"></div>
    </Fragment>
  );
}

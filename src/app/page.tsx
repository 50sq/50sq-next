import { HomeFeatures } from "@/blocks/home-features";
import { HomeHero } from "@/blocks/home-hero";
import PhotoWorkflow from "@/blocks/photo-workflow";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HomeHero />
      <PhotoWorkflow />

      <HomeFeatures />

      {/*<Features2 />*/}

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"></div>
    </Fragment>
  );
}

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
    </Fragment>
  );
}

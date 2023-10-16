import React from "react";
// Components
import {
  Footer,
  Navbar,
  HomeContent,
  Banner,
  Pricing,
  Features,
  Sections,
  Stats,
} from "~/components";

// Options
import {
  featuresFeatures,
  featuresContent,
} from "~/components/Features/options";
import { pricingFeatures } from "~/components/Pricing/options";
import { sectionSections, sectionContent } from "~/components/Sections/options";
import { statsStats } from "~/components/Stats/options";

export default function Home() {
  return (
    <>
      <Navbar page="Home" />
      <HomeContent />
      <Banner />
      <Features features={featuresFeatures} content={featuresContent} />
      <Pricing features={pricingFeatures} />
      <Sections sections={sectionSections} content={sectionContent} />
      <Stats stats={statsStats} />
      <Footer />
    </>
  );
}

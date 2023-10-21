import React from "react";
// Components
import {
  HomeContent,
  Pricing,
  Features,
  Sections,
  Stats,
  AlternateSlide,
} from "~/components";

// Options
import {
  featuresFeatures,
  featuresContent,
} from "~/components/Features/options";
import { pricingFeatures } from "~/components/Pricing/options";
import { sectionSections, sectionContent } from "~/components/Sections/options";
import { statsStats } from "~/components/Stats/options";

export default function LandingLayout() {
  return (
    <div className="overflow-x-hidden">
      <HomeContent />
      <AlternateSlide>
        <Features features={featuresFeatures} content={featuresContent} />
        <Pricing features={pricingFeatures} />
        <Sections sections={sectionSections} content={sectionContent} />
        <Stats stats={statsStats} />
      </AlternateSlide>
    </div>
  );
}

import React from "react";
import Features from "../../components/Features/Features";
import Banner from "../../components/Banner/Banner";
import Content from "./Content/Content";
import Pricing from "../../components/Pricing/Pricing";
import Sections from "../../components/Sections/Sections";
import Stats from "../../components/Stats/Stats";

import { features, content } from "./options/features";
import { docContent, documents } from "./options/documents";
import { stats } from "./options/stats";

export default function Home() {
  return (
    <>
      <Content />
      <Banner />
      <Features features={features} content={content} />
      <Pricing />
      <Sections sections={documents} content={docContent} />
      <Stats stats={stats} />
    </>
  );
}

import React from "react";
import Features from "../../components/Features/Features";
import Banner from "../../components/Banner/Banner";
import Content from "./Content/Content";

import { features } from "./features";

export default function Home() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-8">
        <Content />
        <Banner />
        <Features features={features} />
      </div>
    </div>
  );
}

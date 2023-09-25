import React from "react";
import Features from "../components/Features/Features";
import Banner from "../components/Banner/Banner";
import Content from "../components/Content/Home/Content";
import Pricing from "../components/Pricing/Pricing";
import Sections from "../components/Sections/Sections";
import Stats from "../components/Stats/Stats";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer"
import { features, content } from "../options/home/features";
import { docContent, documents } from "../options/home/documents";
import { stats } from "../options/home/stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <Banner />
      <Features features={features} content={content} />
      <Pricing />
      <Sections sections={documents} content={docContent} />
      <Stats stats={stats} />
      <Footer />
    </>
  );
}

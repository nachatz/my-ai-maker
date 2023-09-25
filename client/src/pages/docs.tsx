import React from "react";
import Content from "../components/Content/Docs/Content"
import Faq from "../components/Faq/Faq";
import Navbar from "~/components/Navbar/Navbar";

export default function Docs() {
  return (
    <>
      <Navbar />
      <Content />
      <Faq />
    </>
  );
}

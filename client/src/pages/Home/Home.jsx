import React from "react";
import Features from "../../components/Features/Features";
import Banner from "../../components/Banner/Banner";
import Content from "./Content/Content";
import Pricing from "../../components/Pricing/Pricing";
import Sections from "../../components/Sections/Sections";
import Stats from "../../components/Stats/Stats";
import Footer from "../../components/Footer/Footer";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../redux/reducers/authSlice";

import { Link } from "react-router-dom";

import { features, content } from "./options/features";
import { docContent, documents } from "./options/documents";
import { stats } from "./options/stats";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? (
    <div className="text-center">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Welcome {user}
      </h1>
      <p className="mt-4 text-lg leading-6 text-gray-500">
        You are logged in with token: {token}
      </p>
    </div>
  ) : (
    <div className="text-center">
      <p className="mt-4 text-lg leading-6 text-gray-500">
        You are logged in with token: {token}
      </p>
    </div>
  );

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-8">
        <Content />
        {welcome}
        <Link to="/login">
        hi
        </Link>
        <Banner />
        <Features features={features} content={content} />
        <Pricing />
        <Sections sections={documents} content={docContent} />
        <Stats stats={stats} />
        <Footer />
      </div>
    </div>
  );
}

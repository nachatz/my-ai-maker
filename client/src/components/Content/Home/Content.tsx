import { Banner } from "~/components";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Content() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const scrollFactorGlobe = 0.85;
  const scrollFactorContent = 0.5;

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
    const userAgent = window.navigator.userAgent;
    const mobileKeywords = [
      "Mobile",
      "Android",
      "iPhone",
      "iPad",
      "iPod",
      "Windows Phone",
    ];
    const isMobileDevice = mobileKeywords.some((keyword) =>
      userAgent.includes(keyword),
    );
    setIsMobile(isMobileDevice);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && contentRef.current) {
      const reactiveFactorGlobe = !isMobile
        ? scrollFactorGlobe
        : scrollFactorGlobe * 0.6;
      const reactiveFactorContent = !isMobile
        ? scrollFactorContent
        : scrollFactorContent * 0.6;

      const opacityFactorGlobe =
        1 - scrollPosition / (window.innerHeight * reactiveFactorGlobe);
      const opacityFactorContent =
        1 - scrollPosition / (window.innerHeight * reactiveFactorContent);

      videoRef.current.style.transform = `translateY(${
        scrollPosition * reactiveFactorGlobe
      }px)`;
      videoRef.current.style.opacity = opacityFactorGlobe.toString();

      contentRef.current.style.transform = `translateY(${
        scrollPosition * reactiveFactorContent
      }px)`;
      contentRef.current.style.opacity = opacityFactorContent.toString();
    }
  }, [scrollPosition, isMobile]);

  return (
    <div className="shadow-inner-2xl relative h-screen">
      <video
        ref={videoRef}
        webkit-playsinline={`${true}`}
        playsInline
        autoPlay
        muted
        loop
        className="absolute inset-0 h-full w-full border-none object-cover outline-none"
      >
        <source src="/video/planet.mp4" type="video/mp4" />
      </video>

      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-white"
      >
        <div className="mx-auto max-w-2xl p-4">
          <h2 className="text-center font-semibold leading-7 text-indigo-600">
            Train Your Machine Learning Models
          </h2>
          <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Just upload your data, and we&apos;ll handle the rest
          </p>
          <p className="mt-6 text-center text-lg leading-8 text-gray-900">
            MyAIMaker optimizes the procedure of training machine learning
            models by offering a streamlined user interface that facilitates the
            generation, engagement, and operationalization of state-of-the-art
            technology.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/models"
              className="rounded-md bg-primary-500 px-6 py-2 font-semibold text-white shadow-md hover:bg-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:ring-offset-1"
            >
              Try it now (it&apos;s free!)
            </Link>
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
}

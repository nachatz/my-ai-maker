import { Banner } from "~/components";
import { useEffect, useState, useRef } from "react";
export default function Content() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollFactorGlobe = 0.85;
  const scrollFactorContent = 0.5;

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && contentRef.current) {
      const opacityFactorGlobe =
        1 - scrollPosition / (window.innerHeight * scrollFactorGlobe);
      const opacityFactorContent =
        1 - scrollPosition / (window.innerHeight * scrollFactorContent);

      videoRef.current.style.transform = `translateY(${
        scrollPosition * scrollFactorGlobe
      }px)`;
      videoRef.current.style.opacity = opacityFactorGlobe.toString();

      contentRef.current.style.transform = `translateY(${
        scrollPosition * scrollFactorContent
      }px)`;
      contentRef.current.style.opacity = opacityFactorContent.toString();
    }
  }, [scrollPosition]);

  return (
    <div className="shadow-inner-2xl relative h-screen">
      <video
        ref={videoRef}
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
            <button className="rounded-md bg-primary-500 px-6 py-2 font-semibold text-white shadow-md hover:bg-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:ring-offset-1">
              Try it now (it&apos;s free!)
            </button>
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
}

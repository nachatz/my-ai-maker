import React from "react";
import Link from 'next/link';
import {DocumentsArray, DocContent} from "../../models/models"

interface Props {
  sections: DocumentsArray;
  content: DocContent;
}

export default function Sections({ sections, content }: Props) {
  return (
    <div className="py-24 sm:py-32 mt-20 rounded-md hover:shadow-md transition duration-500 ease-in-out">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            {content.subtitle}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {content.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {content.description}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={section.datetime} className="text-gray-500">
                  {section.date}
                </time>
                <Link
                  href={section.category}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {section.category.title}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={section}>
                    <span className="absolute inset-0" />
                    {section.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {section.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={section.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link href={section.author}>
                      <span className="absolute inset-0" />
                      {section.author.name}
                    </Link>
                  </p>
                  <p className="text-gray-600">{section.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

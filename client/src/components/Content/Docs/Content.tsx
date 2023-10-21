import React from "react";
import dice from "~/../public/photo/blue-dice.jpg";

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Data preparation
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Training a machine learning model
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Training a model can be daunting at first, but with our tool you
                do it easily. Let&apos;s work together to prepare your data.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={dice.src}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                To train a machine learning model, you need to understand the
                basics. In machine learning, we simply search for a set of
                weights (decimal numbers) that we can multiply by our input data
                to get the desired output. For example, if we want to predict
                the price of a house, we can multiply the number of bedrooms by
                a weight, the number of bathrooms by a weight, and so on. The
                sum of these multiplications will be our prediction.
              </p>
              <br />
              <p>
                These summations can be mapped to real life values, like say
                predicting if someones favorite color is likely to be blue. To
                prepare our data so we can learn something meaningful, all we
                need to do is attach some labels. Machine learning models learn
                by looking at previous data and their results. For example, if
                we feed a machine learning model data about people including
                their age and favorite hobby, we may be able to train the model
                on age and predict a possible hobby the individual will enjoy.
                This is highly trivialized, but it&apos;s a start!
              </p>
              <br />
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Steps to take
              </p>
              <ul className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  1.
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Create a dataset
                    </strong>{" "}
                    The easiest format is with a CSV (comma separated values).
                    Take your data and on each row comma separate the features
                    for each value. For example, each row may be a person and
                    each column would be a detail about them, say age, height,
                    weight, etc.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  2.
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Add a label column
                    </strong>{" "}
                    Once more, for the model to learn we need a sense of truth.
                    Create a column explicitly called &apos;label&apos; and put
                    the truth value for each row. For example, if we are trying
                    to predict if someone likes the color blue, we would put
                    &apos;yes&apos; or &apos;no&apos; in the label column for
                    each row.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  3.
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Receive the weights
                    </strong>{" "}
                    After training your model, we will return to you the weights
                    of your model. You can take these and share them with
                    others, or use them in your own projects. You can also just
                    use the application to make predictions on the fly.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Training a machine learning model is difficult, and getting
                started can be stressful. Take a glance at our sample dataset to
                get a feel for how it works.
              </p>
              <a href="./sample.csv" download className="text-primary-500">
                <button>Sample data</button>
              </a>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Want to learn more?
              </h2>
              <p className="mt-6">
                For every custom model we offer, we provide a basic example of
                how you can implement it yourself. Thus, enabling this tool to a
                wide range of users. You can browse through LearnAI for models
                built with PyTorch, or you can train your own model through the
                UI and grab the architecture once you&apos;re done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

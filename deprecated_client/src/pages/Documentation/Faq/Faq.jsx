import React from "react";

const faqItems = [
  {
    question: "Do I have to create an account?",
    answer:
      "No account is required to learn & try training a model. To train custom models, save weights, & manage data you will need to create an account.",
  },
  {
    question: "Will I get emails?",
    answer:
      "No, MyAIMaker will never email you, any emails you receive will be from a third party service such as Stripe or OAuth. We store no confidential data.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Your data is safe, but never store confidential data within this tool (salaries, ssn, etc). We are not responsible for any data loss or breaches. If this is a concern, take advantage of LearnAI to build your own models.",
  },
  {
    question: "How do refunds work?",
    answer:
      "We offer a monthly service that can be cancelled at any moment, there is no contract. If you cancel, you will not be charged again.",
  },
  {
    question: "I'm still confused, what do I do?",
    answer:
      "Our tool takes your data and trains a model. The result of this is the model weights that allow you to make effective predictions for your dataset",
  },
  {
    question: "Can I use the code?",
    answer:
      "The code provided for models is yours to use as you please. We do not own your data or the models.",
  },
];

export default function Faq() {
  return (
    <section>
      <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div>
          <div className="max-w-2xl">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Questions answered
            </p>
            <p className="mt-2 text-3xl font-bold tracking-tight">
              Frequent questions
            </p>
          </div>
        </div>
        <div className="w-full mx-auto mt-12 text-left">
          <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
            <div className="p-4 mx-auto lg:max-w-7xl lg:p-0">
              <ul className="grid grid-cols-2 gap-4 list-none lg:grid-cols-3 lg:gap-12">
                {faqItems.map((item, index) => (
                  <li key={index}>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        {item.question}
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      {item.answer}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

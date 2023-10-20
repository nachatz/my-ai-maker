import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import Link from "next/link";

export default function login({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-24 flex justify-center">
          {Object.values(providers).map((provider) => (
            <button
              className="w-25 flex rounded-md bg-indigo-600 px-5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              key={provider.id}
              onClick={() =>
                void signIn(provider.id, {
                  callbackUrl: `${window.location.origin}`,
                })
              }
            >
              Sign in with Google
            </button>
          ))}
          <Link
            href="/"
            className="w-25 ml-5 flex rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back
          </Link>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="mt-5 text-center text-sm text-gray-500">
            Don&apos;t have a Google account?{" "}
            <a
              target="_blank"
              href="https://www.google.com/account/about/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create one for free
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}

export default function AuthLayout() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-14 flex justify-center">
          <button
            type="submit"
            className="w-25 flex rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in with Google
          </button>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="mt-5 text-center text-sm text-gray-500">
            Don't have a Google account?{" "}
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-sans lg:flex flex-col">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl text-center">
          LanCare Hub
        </h1>
        <p className="mt-8 text-xl leading-8 text-gray-600 text-center max-w-2xl">
          The ultimate Orchid Care Marketplace Platform. Connect with professional orchid care providers and enthusiasts seamlessly.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            Get Started
          </button>
          <button className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import Button from "../atoms/Button";

export default function HeritageDetail({ site }) {
  if (!site) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Destination Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            The destination you are looking for does not exist.
          </p>

          <div className="mt-6">
            <Button href="/heritage">
              ← Back to Heritage Sites
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px]">

        <Image
          src={site.image}
          alt={`View of ${site.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0 bg-black/45"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              {site.category}
            </p>

            <p className="mt-2 text-sm text-gray-200">
              {site.location}
            </p>

            <h1 className="mt-2 max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>

          </div>
        </div>
      </section>

      {/* Information */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              About this destination
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              {site.description}
            </p>
          </div>

          {/* History */}
          {site.history && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                History
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                {site.history}
              </p>
            </div>
          )}

          {/* Activities */}
          {site.activities && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Things to Do
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {site.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                  >
                    <p className="font-medium text-gray-800">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {site.highlights && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Highlights
              </h2>

              <ul className="mt-5 space-y-3">
                {site.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-800" />

                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Best Time */}
          {site.bestTime && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Best Time to Visit
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                {site.bestTime}
              </p>
            </div>
          )}

          {/* How to Get There */}
          {site.howToGetThere && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                How to Get There
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                {site.howToGetThere}
              </p>
            </div>
          )}

          {/* Tips */}
          {site.tips && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Travel Tips
              </h2>

              <ul className="mt-5 space-y-3">
                {site.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="font-bold">
                      {index + 1}.
                    </span>

                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <Button href="/heritage">
              ← Back to Heritage Sites
            </Button>
          </div>

        </div>
      </section>

    </main>
  );
}
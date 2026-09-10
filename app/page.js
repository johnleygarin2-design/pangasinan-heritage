import Image from "next/image";
import Button from "../components/atoms/Button";
import { Heading, BodyText } from "../components/atoms/Typography";
import HeritageGrid from "../components/organisms/HeritageGrid";

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative min-h-[75vh] overflow-hidden">

        <Image
          src="/images/hundred-islands.jpg" 
          alt="Scenic view of Hundred Islands in Pangasinan"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0 bg-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-[75vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

            <div className="max-w-3xl">

              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-300">
                Pangasinan Heritage Digital Showcase
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
                Discover the Heritage of Pangasinan
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-100 sm:text-xl">
                Explore selected natural landscapes,
                historical landmarks, and cultural
                destinations across the province.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/heritage">
                  Explore Heritage
                </Button>

                <Button
                  href="/about"
                  variant="secondary"
                >
                  About the Showcase
                </Button>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            Explore
          </p>

          <Heading level={2} className="mt-2">
            Stories, Places, and Heritage
          </Heading>

          <BodyText className="mt-5">
            Pangasinan offers a diverse collection of
            natural and historical destinations. This
            digital showcase provides a simple way to
            discover selected places and learn more
            about their significance.
          </BodyText>

        </div>
      </section>

      {/* FEATURED SITES */}
      <section
        className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="featured-sites"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              Featured
            </p>

            <h2
              id="featured-sites"
              className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Explore Pangasinan
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Start exploring some of the province&apos;s
              selected destinations.
            </p>
          </div>

          <HeritageGrid />

        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-800 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Start Your Pangasinan Journey
          </h2>

          <p className="mt-4 text-emerald-50">
            Explore destinations and discover more of
            Pangasinan&apos;s heritage.
          </p>

          <div className="mt-8">
            <Button
              href="/heritage"
              variant="secondary"
            >
              View Heritage Sites
            </Button>
          </div>

        </div>
      </section>

    </main>
  );
}
import { Heading, BodyText } from "../../components/atoms/Typography";
import HeritageExplorer from "../../components/organisms/HeritageExplorer";

export const metadata = {
  title: "Heritage Sites | Pangasinan Heritage",
  description:
    "Explore selected natural and historical destinations across Pangasinan.",
};

export default function HeritagePage() {
  return (
    <main>
      {/* Page Introduction */}
      <section className="bg-emerald-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-emerald-700">
            Explore Pangasinan
          </p>

          <Heading level={1}>
            Heritage & Destinations
          </Heading>

          <BodyText className="mt-4 max-w-2xl">
            Discover selected natural landscapes,
            historical landmarks, and destinations
            throughout Pangasinan.
          </BodyText>

        </div>
      </section>

      {/* Search and Grid */}
      <section
        className="px-4 py-12 sm:px-6 lg:px-8"
        aria-labelledby="heritage-list-heading"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-8">
            <h2
              id="heritage-list-heading"
              className="text-2xl font-bold text-gray-900"
            >
              Explore Heritage Sites
            </h2>
          </div>

          <HeritageExplorer />

        </div>
      </section>
    </main>
  );
}
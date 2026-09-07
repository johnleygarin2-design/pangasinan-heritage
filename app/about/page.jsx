import { Heading, BodyText } from "../../components/atoms/Typography";

export const metadata = {
  title: "About | Pangasinan Heritage",
  description:
    "Learn about the Pangasinan Heritage Digital Showcase.",
};

export default function AboutPage() {
  return (
    <main>

      <section className="bg-emerald-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            About
          </p>

          <Heading level={1} className="mt-2">
            Pangasinan Heritage Digital Showcase
          </Heading>

          <BodyText className="mt-5 max-w-2xl">
            A digital platform designed to make selected
            heritage and tourism destinations in Pangasinan
            easier to discover through a mobile-friendly
            and accessible web experience.
          </BodyText>

        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">

          <Heading level={2}>
            Purpose of the Platform
          </Heading>

          <BodyText className="mt-5">
            The website presents selected destinations
            through organized information, responsive
            layouts, optimized imagery, and reusable
            interface components.
          </BodyText>

          <div className="mt-10">
            <Heading level={3}>
              Designed for Mobile Users
            </Heading>

            <BodyText className="mt-3">
              The interface follows a mobile-first approach,
              allowing visitors to browse destination
              information on smartphones while maintaining
              responsive layouts for tablets and desktop
              computers.
            </BodyText>
          </div>

          <div className="mt-10">
            <Heading level={3}>
              Accessibility
            </Heading>

            <BodyText className="mt-3">
              The interface incorporates semantic HTML,
              descriptive image alternatives, visible
              keyboard focus states, readable text, and
              accessible navigation patterns.
            </BodyText>
          </div>

        </div>
      </section>

    </main>
  );
}
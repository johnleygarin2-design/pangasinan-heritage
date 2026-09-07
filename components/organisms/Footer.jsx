export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid gap-8 md:grid-cols-2">

          <div>
            <h2 className="text-lg font-bold">
              Pangasinan Heritage
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-300">
              Discover the cultural, historical, and
              natural heritage of Pangasinan.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase">
              Explore
            </h2>

            <div className="mt-3 flex flex-col gap-2 text-sm">

              <a
                href="/"
                className="hover:underline"
              >
                Home
              </a>

              <a
                href="/heritage"
                className="hover:underline"
              >
                Heritage Sites
              </a>

              <a
                href="/about"
                className="hover:underline"
              >
                About
              </a>

            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-gray-400">
          © 2026 Pangasinan Heritage Digital Showcase
        </div>

      </div>
    </footer>
  );
}
import Button from "../components/atoms/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-lg text-center">

        <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
          404
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          Page Not Found
        </h1>

        <p className="mt-4 text-gray-600">
          Sorry, we couldn&apos;t find the heritage page
          you&apos;re looking for.
        </p>

        <div className="mt-8">
          <Button href="/">
            Return Home
          </Button>
        </div>

      </div>
    </main>
  );
}
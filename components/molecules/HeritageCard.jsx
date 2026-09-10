import Image from "next/image";
import Button from "../atoms/Button";

export default function HeritageCard({
  name,
  location,
  shortDescription,
  image,
  href,
}) {
  return (
    <article
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-sm
        ring-1
        ring-gray-200
        transition
        duration-200
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
       <Image
  src={`/pangasinan-heritage${image}`}
          alt={`${name} in ${location}`}
          fill
          sizes="
            (max-width: 639px) 100vw,
            (max-width: 1023px) 50vw,
            33vw
          "
          className="
            object-cover
            transition
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">

        <p className="mb-2 text-sm font-semibold text-emerald-700">
          {location}
        </p>

        <h3 className="text-xl font-bold text-gray-900">
          {name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
          {shortDescription}
        </p>

        <div className="mt-5">
          <Button href={href}>
            Learn More
          </Button>
        </div>

      </div>
    </article>
  );
}
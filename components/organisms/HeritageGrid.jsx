import HeritageCard from "../molecules/HeritageCard";
import heritageSites from "../../data/heritageSites";

export default function HeritageGrid({
  sites = heritageSites,
}) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {sites.map((site) => (
        <HeritageCard
          key={site.id}
          name={site.name}
          location={site.location}
          shortDescription={site.shortDescription}
          image={site.image}
          href={`/heritage/${site.id}`}
        />
      ))}
    </div>
  );
}
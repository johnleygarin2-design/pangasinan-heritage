import HeritageDetail from "../../../components/organisms/HeritageDetail";
import heritageSites from "../../../data/heritageSites";

export const metadata = {
  title: "Our Farm Republic | Pangasinan Heritage",
  description:
    "Explore Our Farm Republic in Mangatarem, Pangasinan.",
};

export default function OurFarmRepublicPage() {
  const site = heritageSites.find(
    (item) => item.id === "our-farm-republic"
  );

  return <HeritageDetail site={site} />;
}
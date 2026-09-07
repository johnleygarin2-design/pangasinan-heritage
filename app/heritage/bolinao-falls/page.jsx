import HeritageDetail from "../../../components/organisms/HeritageDetail";
import heritageSites from "../../../data/heritageSites";

export const metadata = {
  title: "Bolinao Falls | Pangasinan Heritage",
  description:
    "Explore Bolinao Falls in Bolinao, Pangasinan.",
};

export default function BolinaoFallsPage() {
  const site = heritageSites.find(
    (item) => item.id === "bolinao-falls"
  );

  return <HeritageDetail site={site} />;
}
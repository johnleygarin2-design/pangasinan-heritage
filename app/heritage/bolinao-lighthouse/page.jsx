import HeritageDetail from "../../../components/organisms/HeritageDetail";
import heritageSites from "../../../data/heritageSites";

export const metadata = {
  title: "Cape Bolinao Lighthouse | Pangasinan Heritage",
  description:
    "Explore the historic Cape Bolinao Lighthouse in Bolinao, Pangasinan.",
};

export default function CapeBolinaoLighthousePage() {
  const site = heritageSites.find(
    (item) => item.id === "cape-bolinao-lighthouse"
  );

  return <HeritageDetail site={site} />;
}
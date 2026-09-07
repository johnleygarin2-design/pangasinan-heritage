import HeritageDetail from "../../../components/organisms/HeritageDetail";
import heritageSites from "../../../data/heritageSites";

export const metadata = {
  title: "Lingayen Provincial Capitol | Pangasinan Heritage",
  description:
    "Explore the historic Lingayen Provincial Capitol in Pangasinan.",
};

export default function LingayenCapitolPage() {
  const site = heritageSites.find(
    (item) => item.id === "lingayen-capitol"
  );

  return <HeritageDetail site={site} />;
}
import HeritageDetail from "../../../components/organisms/HeritageDetail";
import heritageSites from "../../../data/heritageSites";

export const metadata = {
  title: "Minor Basilica of Our Lady of the Rosary | Pangasinan Heritage",
  description:
    "Explore the Minor Basilica of Our Lady of the Rosary of Manaoag in Pangasinan.",
};

export default function ManaoagBasilicaPage() {
  const site = heritageSites.find(
    (item) => item.id === "manaoag-basilica"
  );

  return <HeritageDetail site={site} />;
}
import HeritageDetail from "../../../components/organisms/HeritageDetail";
import heritageSites from "../../../data/heritageSites";

export const metadata = {
  title: "Patar Beach | Pangasinan Heritage",
  description:
    "Explore Patar Beach in Bolinao, Pangasinan.",
};

export default function PatarBeachPage() {
  const site = heritageSites.find(
    (item) => item.id === "patar-beach"
  );

  return <HeritageDetail site={site} />;
}
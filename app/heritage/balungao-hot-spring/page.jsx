import HeritageDetail from "../../../components/organisms/HeritageDetail";
import heritageSites from "../../../data/heritageSites";

export const metadata = {
  title: "Balungao Hot Spring | Pangasinan Heritage",
  description:
    "Explore Balungao Hot Spring in Balungao, Pangasinan.",
};

export default function BalungaoHotSpringPage() {
  const site = heritageSites.find(
    (item) => item.id === "balungao-hot-spring"
  );

  return <HeritageDetail site={site} />;
}
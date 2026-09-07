import HeritageDetail from "../../../components/organisms/HeritageDetail";
import heritageSites from "../../../data/heritageSites";

export const metadata = {
  title: "Enchanted Cave | Pangasinan Heritage",
  description:
    "Explore Enchanted Cave in Bolinao, Pangasinan.",
};

export default function EnchantedCavePage() {
  const site = heritageSites.find(
    (item) => item.id === "enchanted-cave"
  );

  return <HeritageDetail site={site} />;
}
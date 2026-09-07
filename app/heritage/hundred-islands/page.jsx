import HeritageDetail from "../../../components/organisms/HeritageDetail";
import heritageSites from "../../../data/heritageSites";

export const metadata = {
  title: "Hundred Islands | Pangasinan Heritage",
  description:
    "Explore Hundred Islands in Alaminos City, Pangasinan.",
};

export default function HundredIslandsPage() {
  const site = heritageSites.find(
    (item) => item.id === "hundred-islands"
  );

  return <HeritageDetail site={site} />;
}
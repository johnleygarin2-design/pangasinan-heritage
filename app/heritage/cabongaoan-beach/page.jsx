import HeritageDetail from "../../../components/organisms/HeritageDetail";
import heritageSites from "../../../data/heritageSites";

export const metadata = {
  title: "Cabongaoan Beach | Pangasinan Heritage",
  description:
    "Explore Cabongaoan Beach in Burgos, Pangasinan.",
};

export default function CabongaoanBeachPage() {
  const site = heritageSites.find(
    (item) => item.id === "cabongaoan-beach"
  );

  return <HeritageDetail site={site} />;
}
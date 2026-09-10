import Image from "next/image";

export default function SiteImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
}) {
  const imageSrc = src.startsWith("/pangasinan-heritage")
    ? src
    : `/pangasinan-heritage${src}`;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}
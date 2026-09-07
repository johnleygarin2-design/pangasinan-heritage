import Image from "next/image";

export default function SiteImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}
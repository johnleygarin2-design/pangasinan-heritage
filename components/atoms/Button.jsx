import Link from "next/link";

export default function Button({
  children,
  href = "/pangasinan-heritage",
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-emerald-700 text-white hover:bg-emerald-800",
    secondary:
      "border border-emerald-700 bg-white text-emerald-700 hover:bg-emerald-50",
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex
        min-h-11
        items-center
        justify-center
        rounded-lg
        px-5
        py-3
        text-sm
        font-semibold
        transition
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-emerald-600
        focus:ring-offset-2
        ${variants[variant]}
      `}
    >
      {children}
    </Link>
  );
}


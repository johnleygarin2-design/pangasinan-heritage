export default function NavigationItem({
  href,
  children,
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        block
        rounded-lg
        px-4
        py-3
        text-sm
        font-medium
        text-gray-700
        transition
        hover:bg-emerald-50
        hover:text-emerald-700
        focus:outline-none
        focus:ring-2
        focus:ring-emerald-600
        md:px-3
        md:py-2
      "
    >
      {children}
    </a>
  );
}
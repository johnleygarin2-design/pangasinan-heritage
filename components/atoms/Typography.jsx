export function Heading({
  children,
  level = 2,
  className = "",
}) {
  const styles = {
    1: "text-4xl sm:text-5xl lg:text-6xl",
    2: "text-3xl sm:text-4xl",
    3: "text-xl sm:text-2xl",
  };

  const Tag = `h${level}`;

  return (
    <Tag
      className={`font-bold tracking-tight text-gray-900 ${styles[level]} ${className}`}
    >
      {children}
    </Tag>
  );
}

export function BodyText({
  children,
  className = "",
}) {
  return (
    <p
      className={`text-base leading-7 text-gray-600 ${className}`}
    >
      {children}
    </p>
  );
}
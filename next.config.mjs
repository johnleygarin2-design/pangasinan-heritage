/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  basePath: "/pangasinan-heritage",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
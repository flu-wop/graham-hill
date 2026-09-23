import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@flu-wop/design-system"],
  turbopack: {},
};

export default nextConfig;

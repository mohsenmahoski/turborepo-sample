import withTM from "next-transpile-modules";

const transpileModules = withTM(["@repo/utility"]);

const nextConfig = transpileModules({
  // Any additional config for next goes in here
});

export default nextConfig;
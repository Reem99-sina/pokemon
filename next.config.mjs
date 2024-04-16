/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
    images:{
        remotePatterns: [
            {
              protocol: "https",
              hostname: "raw.githubusercontent.com", // if your website has no www, drop it
            },
            {
              protocol: "http",
              hostname: "localhost",
            },
          ],
    },compiler:{
      styledComponents: true,
    }
};

export default nextConfig;

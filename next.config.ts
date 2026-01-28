import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
        port: "",
        pathname: "/isteam/ip/8b8fcb7f-dd76-4fdf-b62a-52d8cc7e8443/**",
      },
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https", 
        hostname: "upload.wikimedia.org", 
        port: "", 
        pathname: "/**"
      },
      {
        protocol: "https", 
        hostname: "www.uc.edu", 
        port: "", 
        pathname: "/**"
      }
    ]
  }
  /* config options here */
};

export default nextConfig;

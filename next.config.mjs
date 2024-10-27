/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ceuifpocmqziworgbkqh.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/tours/**",
      },
      {
        protocol: "https",
        hostname: "ceuifpocmqziworgbkqh.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/instructorsPhotos/**",
      },
    ],
  },
};

export default nextConfig;

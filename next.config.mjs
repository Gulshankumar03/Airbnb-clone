/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Specify the protocol (http or https)
        hostname: "res.cloudinary.com", // Replace with the actual domain
        port: "", // Leave empty if not using a specific port
        pathname: "/**", // Specify the path pattern (allow all paths)
      },
      {
        protocol: "https", // Specify the protocol (http or https)
        hostname: "lh3.googleusercontent.com", // Replace with the actual domain
        port: "", // Leave empty if not using a specific port
        pathname: "/**", // Specify the path pattern (allow all paths)
      },

      // Add more patterns if needed
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Your uploads
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',        // YouTube Thumbnails
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',    // YouTube Thumbnails (Backup)
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // <--- NEW: Fixes the Guitar Image error
      },
    ],
  },
};

export default nextConfig;
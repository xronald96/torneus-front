/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // https://i.postimg.cc/wRms9jBq/Whats-App-Image-2023-03-31-at-18-22-31.jpg
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
  
}

module.exports = nextConfig

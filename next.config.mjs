/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/todos/0',
        permanent: true, // Use 'true' for a 301 redirect, 'false' for a 302 redirect
      },
    ];
  },
};

export default nextConfig;
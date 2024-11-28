/**@type {import('next').NextConfig}*/
const NextConfig = {
  images: {
    domains: ['cdn.imagin.studio']
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = NextConfig
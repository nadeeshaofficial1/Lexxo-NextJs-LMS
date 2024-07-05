/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/',
            destination: '/browse',
          },
        ];
      },
    images:{
        unoptimized:true,
        domains:['media.graphassets.com']
    }
}

module.exports = nextConfig

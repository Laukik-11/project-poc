/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false, encoding: false };
        return config;
    },
};
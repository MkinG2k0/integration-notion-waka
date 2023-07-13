// @ts-check
/** @type {import('next').NextConfig} */

require('./src/shared/lib/interval')

const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
}

module.exports = nextConfig

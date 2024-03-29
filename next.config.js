/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				port: "",
				pathname: "/u/**",
			},
			{
				protocol: "https",
				hostname: "i.imgur.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "imgur.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i.ibb.co",
				port: "",
				pathname: "/**/**",
			},
			{
				protocol: "https",
				hostname: "i.postimg.cc",
				port: "",
				pathname: "/**/**",
			},
		],
	},
};

module.exports = nextConfig

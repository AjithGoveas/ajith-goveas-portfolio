import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'images.unsplash.com'},
            {protocol: 'https', hostname: 'www.pexels.com'},
            {protocol: 'https', hostname: 'cdn.pixabay.com'},
        ],
    },
    async headers() {
        return [
            {
                source: "/resume.pdf",
                headers: [
                    {
                        key: "Content-Disposition",
                        value: 'attachment; filename="Ajith_Goveas_Resume.pdf"',
                    },
                    {
                        key: "Content-Type",
                        value: "application/pdf",
                    },
                ],
            },
            {
                source: "/:path*(svg|png|jpg|jpeg|webp|gif|ico|webmanifest|woff2)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;

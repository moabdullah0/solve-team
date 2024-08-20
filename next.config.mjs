/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'teknolojiplus.com', // بدون الشرطة المائلة
            port: '',
            pathname: '/wp-content/uploads/**', // ضبط مسار الصور الصحيح
        }, ],
    },
};

export default nextConfig;
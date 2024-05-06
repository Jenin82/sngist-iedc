import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SNGIST IEDC",
    description: "Website for IEDC at SNGIST Group of Institutions",
    keywords: "iedc, sngist iedc, iedc sngist, student community, sree narayana guru institute of science and technology, sngist group of institutions"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="light">
            <body className={inter.className}>
                <Navbar />
                <Toaster position="bottom-center" reverseOrder={true} />
                {children}
                <Footer />
            </body>
        </html>
    );
}

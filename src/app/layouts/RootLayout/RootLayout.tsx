import type { Metadata } from "next";
import { Geist } from "next/font/google";

import {
	SITE_DESCRIPTION,
	SITE_NAME,
} from "@/src/shared/constants/seo.constants";
import { MainProvider } from "@/src/app/providers/MainProvider/MainProvider";

import "../../../shared/styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru" suppressHydrationWarning>
			<body className={`${geistSans.variable}} antialiased`}>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	);
}

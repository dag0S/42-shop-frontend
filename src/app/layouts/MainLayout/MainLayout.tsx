import { Footer } from "@/src/widgets/Footer";
import { Header } from "@/src/widgets/Header";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1 mx-5 lg:mx-14">{children}</main>
			<Footer />
		</div>
	);
}

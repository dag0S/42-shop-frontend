import { Header } from "@/src/widgets/Store/ui/Header/Header";
import { Sidebar } from "@/src/widgets/Store/ui/Sidebar/Sidebar";

export default function StoreLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col w-full">
			<div>
				<div className="hidden lg:flex h-full w-64 flex-col fixed inset-y-0 z-[50]">
					<Sidebar />
				</div>
				<div className="h-[70] lg:pl-64 fixed inset-y-0 w-full z-[49]">
					<Header />
				</div>
				<main className="lg:pl-64 py-[70px] bg-white">{children}</main>
			</div>
		</div>
	);
}

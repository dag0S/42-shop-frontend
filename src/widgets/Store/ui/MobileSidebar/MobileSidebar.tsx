import { Menu } from "lucide-react";
import type { FC } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/src/shared/shadcn/ui";
import { Sidebar } from "../Sidebar/Sidebar";

export const MobileSidebar: FC = () => {
	return (
		<Sheet>
			<SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition">
				<Menu />
			</SheetTrigger>
			<SheetContent side="left" className="p-0 bg-white">
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};

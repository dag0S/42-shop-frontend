import type { FC } from "react";

import { Logo } from "@/src/shared/ui";
import { Navigation } from "../Navigation/Navigation";

export const Sidebar: FC = () => {
	return (
		<div className="h-full flex flex-col border-r bg-card overflow-y-auto pt-4 px-5 my-1">
			<Logo />
			<Navigation />
		</div>
	);
};

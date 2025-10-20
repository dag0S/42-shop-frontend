import type { FC } from "react";

import { Logo, SearchInput } from "@/src/shared/ui";
import { Menu } from "./Menu/Menu";
import { MobileMenu } from "./Menu/MobileMenu";

export const Header: FC = () => {
	return (
		<header className="p-5 gap-x-4 h-full flex items-center justify-between lg:justify-start border-b">
			<Logo />
			<div className="ml-auto hidden w-[40%] lg:block">
				<SearchInput />
			</div>
			<Menu />
			<MobileMenu />
		</header>
	);
};

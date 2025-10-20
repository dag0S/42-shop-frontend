"use client";

import type { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import type { Props } from "./MenuItem.props";
import { cn } from "@/src/shared/lib/utils";

export const MenuItem: FC<Props> = ({ route }) => {
	const pathname = usePathname();

	return (
		<Link
			href={route.link}
			className={cn(
				"flex items-center gap-x-3 text-foreground text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-primary/10 hover:text-primary hover:drop-shadow-sm bg-transparent transition-all duration-200",
				{
					"text-sm text-primary bg-primary/10 hover:bg-primary/10 hover:text-primary":
						pathname === route.link,
				},
			)}
		>
			<route.icon className="size-5" />
			{route.value}
		</Link>
	);
};

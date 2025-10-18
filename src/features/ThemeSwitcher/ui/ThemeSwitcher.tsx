"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/src/shared/shadcn/ui";

export const ThemeSwitcher = () => {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
					<span className="sr-only">Сменить тему</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					Светлая
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					Темная
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					Системы
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

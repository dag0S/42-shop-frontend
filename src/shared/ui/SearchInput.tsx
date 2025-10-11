"use client";

import { useRouter } from "next/navigation";
import { useState, type FC } from "react";
import { Search } from "lucide-react";

import { Button, Input } from "../shadcn/ui";
import { PUBLIC_URL } from "../config/url.config";

export const SearchInput: FC = () => {
	const [searchBy, setSearchBy] = useState<string>("");
	const router = useRouter();

	return (
		<div className="flex items-center relative">
			<Input
				placeholder="Поиск товаров"
				value={searchBy}
				onChange={(e) => setSearchBy(e.target.value)}
				className="rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
			/>
			<Button
				onClick={() =>
					router.push(PUBLIC_URL.explorer(`?searchBy=${searchBy}`))
				}
				className="rounded-l-none"
			>
				<Search />
			</Button>
		</div>
	);
};

"use client";

import { useParams } from "next/navigation";
import type { FC } from "react";
import {
	Album,
	BarChart,
	FolderKanban,
	PaintBucket,
	Settings,
	Star,
} from "lucide-react";

import type { IMenuItem } from "./menu.interface";
import { STORE_URL } from "@/src/shared/config/url.config";
import { MenuItem } from "./MenuItem";

export const Navigation: FC = () => {
	const params = useParams<{ storeId: string }>();

	const routes: IMenuItem[] = [
		{
			icon: BarChart,
			link: STORE_URL.home(params?.storeId),
			value: "Статистика",
		},
		{
			icon: FolderKanban,
			link: STORE_URL.products(params?.storeId),
			value: "Товары",
		},
		{
			icon: Album,
			link: STORE_URL.categories(params?.storeId),
			value: "Категории",
		},
		{
			icon: PaintBucket,
			link: STORE_URL.colors(params?.storeId),
			value: "Цвета",
		},
		{
			icon: Star,
			link: STORE_URL.reviews(params?.storeId),
			value: "Отзывы",
		},
		{
			icon: Settings,
			link: STORE_URL.settings(params?.storeId),
			value: "Настройки магазина",
		},
	];

	return (
		<div className="flex flex-col w-full flex-1 mt-6">
			<div className="flex flex-col w-full space-y-3">
				{routes.map((route) => (
					<MenuItem route={route} key={route.value} />
				))}
			</div>
		</div>
	);
};

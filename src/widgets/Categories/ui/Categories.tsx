"use client";

import { useParams } from "next/navigation";
import type { FC } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

import { formatDate } from "@/src/shared/utils";
import { DataTable, DataTableLoading, Heading } from "@/src/shared/ui";
import { STORE_URL } from "@/src/shared/config/url.config";
import { Button } from "@/src/shared/shadcn/ui";
import { useGetCategories } from "@/src/shared/hooks";
import {
	categoryColumns,
	type ICategoryColumn,
} from "./CategoryColumns/CategoryColumns";

export const Categories: FC = () => {
	const params = useParams<{ storeId: string }>();

	const { categories, isLoading } = useGetCategories();

	const formattedCategories: ICategoryColumn[] = categories
		? categories.map((category) => ({
				id: category.id,
				createdAt: formatDate(category.createdAt),
				title: category.title,
				storeId: category.storeId,
			}))
		: [];

	return (
		<div className="p-6">
			{isLoading ? (
				<DataTableLoading />
			) : (
				<>
					<div className="flex items-center justify-between">
						<Heading
							title={`Категории (${categories?.length})`}
							description="Все категории магазина"
						/>
						<div className="flex items-center gap-x-4">
							<Link href={STORE_URL.categoryCreate(params?.storeId)}>
								<Button>
									<Plus className="size-4" />
									Создать
								</Button>
							</Link>
						</div>
					</div>
					<div className="mt-3">
						<DataTable
							columns={categoryColumns}
							data={formattedCategories}
							filterKey="title"
						/>
					</div>
				</>
			)}
		</div>
	);
};

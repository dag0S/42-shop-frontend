"use client";

import { useParams } from "next/navigation";
import type { FC } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

import { formatDate } from "@/src/shared/utils";
import { DataTable, DataTableLoading, Heading } from "@/src/shared/ui";
import { STORE_URL } from "@/src/shared/config/url.config";
import { Button } from "@/src/shared/shadcn/ui";
import { useGetColors } from "@/src/shared/hooks";
import type { IColor } from "@/src/shared/types/color.interface";
import { ColorColumns } from "./ColorColumns/ColorColumns";

export const Colors: FC = () => {
	const params = useParams<{ storeId: string }>();

	const { colors, isLoading } = useGetColors();

	const formattedColors: IColor[] = colors
		? colors.map((color) => ({
				id: color.id,
				createdAt: formatDate(color.createdAt),
				name: color.name,
				value: color.value,
				storeId: color.storeId,
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
							title={`Цвета (${colors?.length})`}
							description="Все цвета магазина"
						/>
						<div className="flex items-center gap-x-4">
							<Link href={STORE_URL.colorCreate(params?.storeId)}>
								<Button>
									<Plus className="size-4" />
									Создать
								</Button>
							</Link>
						</div>
					</div>
					<div className="mt-3">
						<DataTable
							columns={ColorColumns}
							data={formattedColors}
							filterKey="name"
						/>
					</div>
				</>
			)}
		</div>
	);
};

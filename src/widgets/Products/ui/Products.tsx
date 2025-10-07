"use client";

import { useParams } from "next/navigation";
import type { FC } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

import { useGetProducts } from "@/src/shared/hooks";
import {
	productColumns,
	type IProductColumn,
} from "./ProductColumns/ProductColumns";
import { formatPrice } from "@/src/shared/utils";
import { DataTable, DataTableLoading, Heading } from "@/src/shared/ui";
import { STORE_URL } from "@/src/shared/config/url.config";
import { Button } from "@/src/shared/shadcn/ui";

export const Products: FC = () => {
	const params = useParams<{ storeId: string }>();

	const { products, isLoading } = useGetProducts();

	const formattedProducts: IProductColumn[] = products
		? products.map((product) => ({
				id: product.id,
				title: product.title,
				price: formatPrice(product.price),
				category: product.category.title,
				color: product.color.value,
				storeId: product.storeId
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
							title={`Товары (${products?.length})`}
							description="Все товары магазина"
						/>
						<div className="flex items-center gap-x-4">
							<Link href={STORE_URL.productCreate(params?.storeId)}>
								<Button>
									<Plus className="size-4" />
									Создать
								</Button>
							</Link>
						</div>
					</div>
					<div className="mt-3">
						<DataTable
							columns={productColumns}
							data={formattedProducts}
							filterKey="title"
						/>
					</div>
				</>
			)}
		</div>
	);
};

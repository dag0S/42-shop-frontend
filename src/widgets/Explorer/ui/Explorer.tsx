"use client";

import type { FC } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import type { Props } from "./Explorer.props";
import { productService } from "@/src/shared/services/product.service";
import { Catalog } from "../../Catalog/ui/Catalog";

export const Explorer: FC<Props> = ({ products }) => {
	const searchParams = useSearchParams();
	const searchBy = searchParams?.get("searchBy");

	const { data } = useQuery({
		queryKey: ["product explorer"],
		queryFn: () => productService.getAll(searchBy),
		initialData: products,
	});

	return (
		<div className="my-6">
			<Catalog
				title={searchBy ? `Поиск по запросу "${searchBy}"` : "Каталог товаров"}
				products={data}
			/>
		</div>
	);
};

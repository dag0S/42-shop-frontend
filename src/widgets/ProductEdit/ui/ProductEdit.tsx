"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import type { FC } from "react";

import { useGetCategories, useGetColors } from "@/src/shared/hooks";
import { productService } from "@/src/shared/services/product.service";
import { ProductForm } from "../../ProductForm";

export const ProductEdit: FC = () => {
	const params = useParams<{ productId: string }>();

	const { data } = useQuery({
		queryKey: ["get product"],
		queryFn: () => productService.getById(params?.productId || ""),
	});

	const { categories } = useGetCategories();
	const { colors } = useGetColors();

	return (
		<ProductForm
			categories={categories || []}
			colors={colors || []}
			product={data}
		/>
	);
};

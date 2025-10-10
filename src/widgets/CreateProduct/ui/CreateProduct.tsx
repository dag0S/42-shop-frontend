"use client";

import type { FC } from "react";

import { useGetCategories, useGetColors } from "@/src/shared/hooks";
import { ProductForm } from "../../ProductForm";

export const CreateProduct: FC = () => {
	const { categories } = useGetCategories();
	const { colors } = useGetColors();

	return <ProductForm categories={categories || []} colors={colors || []} />;
};

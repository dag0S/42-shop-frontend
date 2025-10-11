"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import type { FC } from "react";

import { CategoryForm } from "../../CategoryForm";
import { categoryService } from "@/src/shared/services/category.service";

export const CategoryEdit: FC = () => {
	const params = useParams<{ categoryId: string }>();

	const { data: category } = useQuery({
		queryKey: ["get category"],
		queryFn: () => categoryService.getById(params?.categoryId || ""),
	});

	return <CategoryForm category={category} />;
};

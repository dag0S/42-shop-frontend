import { useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import type { ICategoryInput } from "../../types/category.interface";
import { categoryService } from "../../services/category.service";
import { STORE_URL } from "../../config/url.config";

export const useCreateCategory = () => {
	const params = useParams<{ storeId: string }>();
	const router = useRouter();
	const queryClient = useQueryClient();

	const { mutate: createCategory, isPending: isLoadingCreate } = useMutation({
		mutationKey: ["create category"],
		mutationFn: (data: ICategoryInput) =>
			categoryService.create(data, params?.storeId || ""),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["get categories for store dashboard"],
			});
			toast.success("Категория создана");
			router.push(STORE_URL.categories(params?.storeId || ""));
		},
		onError() {
			toast.error("Ошибка при создании категории");
		},
	});

	return useMemo(
		() => ({ createCategory, isLoadingCreate }),
		[createCategory, isLoadingCreate],
	);
};

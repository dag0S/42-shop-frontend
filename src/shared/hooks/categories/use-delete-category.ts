import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useMemo } from "react";

import { categoryService } from "../../services/category.service";
import { STORE_URL } from "../../config/url.config";

export const useDeleteCategory = () => {
	const router = useRouter();
	const params = useParams<{ storeId: string; categoryId: string }>();
	const queryClient = useQueryClient();

	const { mutate: deleteCategory, isPending: isLoadingDelete } = useMutation({
		mutationKey: ["delete category"],
		mutationFn: () => categoryService.delete(params?.categoryId || ""),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["get categories for store dashboard"],
			});
			toast.success("Категория удалена");
			router.push(STORE_URL.categories(params?.storeId || ""));
		},
		onError() {
			toast.error("Ошибка при удалении категории");
		},
	});

	return useMemo(
		() => ({ deleteCategory, isLoadingDelete }),
		[deleteCategory, isLoadingDelete],
	);
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useMemo } from "react";

import { productService } from "../../services/product.service";
import { STORE_URL } from "../../config/url.config";

export const useDeleteProduct = () => {
	const router = useRouter();
	const params = useParams<{ storeId: string; productId: string }>();
	const queryClient = useQueryClient();

	const { mutate: deleteProduct, isPending: isLoadingDelete } = useMutation({
		mutationKey: ["delete product"],
		mutationFn: () => productService.delete(params?.productId || ""),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["get products for store dashboard"],
			});
			toast.success("Товар удален");
			router.push(STORE_URL.products(params?.storeId || ""));
		},
		onError() {
			toast.error("Ошибка при удалении товара");
		},
	});

	return useMemo(
		() => ({ deleteProduct, isLoadingDelete }),
		[deleteProduct, isLoadingDelete],
	);
};

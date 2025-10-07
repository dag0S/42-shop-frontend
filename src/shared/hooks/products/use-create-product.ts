import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useMemo } from "react";

import { productService } from "../../services/product.service";
import type { IProductInput } from "../../types/product.interface";
import { STORE_URL } from "../../config/url.config";

export const useCreateProduct = () => {
	const router = useRouter();
	const params = useParams<{ storeId: string }>();
	const queryClient = useQueryClient();

	const { mutate: createProduct, isPending: isLoadingCreate } = useMutation({
		mutationKey: ["create product"],
		mutationFn: (data: IProductInput) =>
			productService.create(data, params?.storeId || ""),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["get products for store dashboard"],
			});
			toast.success("Товар создан");
			router.push(STORE_URL.products(params?.storeId || ""));
		},
		onError() {
			toast.error("Ошибка при создании товара");
		},
	});

	return useMemo(
		() => ({ createProduct, isLoadingCreate }),
		[createProduct, isLoadingCreate],
	);
};

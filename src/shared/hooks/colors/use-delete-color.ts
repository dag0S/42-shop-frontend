import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useMemo } from "react";

import { STORE_URL } from "../../config/url.config";
import { colorService } from "../../services/color.service";

export const useDeleteColor = () => {
	const router = useRouter();
	const params = useParams<{ storeId: string; colorId: string }>();
	const queryClient = useQueryClient();

	const { mutate: deleteColor, isPending: isLoadingDelete } = useMutation({
		mutationKey: ["delete color"],
		mutationFn: () => colorService.delete(params?.colorId || ""),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["get colors for store dashboard"],
			});
			toast.success("Цвет удалён");
			router.push(STORE_URL.colors(params?.storeId || ""));
		},
		onError() {
			toast.error("Ошибка при удалении цвета");
		},
	});

	return useMemo(
		() => ({ deleteColor, isLoadingDelete }),
		[deleteColor, isLoadingDelete],
	);
};

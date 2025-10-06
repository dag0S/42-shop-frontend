import { useMutation } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useMemo } from "react";

import { storeService } from "../services/store.service";
import { PUBLIC_URL } from "../config/url.config";

export const useDeleteStore = () => {
	const router = useRouter();
	const params = useParams<{ storeId: string }>();

	const { mutate: deleteStore, isPending: isLoadingDelete } = useMutation({
		mutationKey: ["delete store"],
		mutationFn: () => storeService.delete(params!.storeId),
		onSuccess() {
			toast.success("Магазин удален");
			router.push(PUBLIC_URL.home());
		},
		onError() {
			toast.error("Ошибка при удалении магазина");
		},
	});

	return useMemo(
		() => ({ deleteStore, isLoadingDelete }),
		[deleteStore, isLoadingDelete],
	);
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useMemo } from "react";

import type { IStoreCreate } from "../types/store.interface";
import { storeService } from "../services/store.service";
import { STORE_URL } from "../config/url.config";

export const useCreateStore = () => {
	const router = useRouter();

	const queryClient = useQueryClient();

	const { mutate: createStore, isPending: isLoadingCreate } = useMutation({
		mutationKey: ["create store"],
		mutationFn: (data: IStoreCreate) => storeService.create(data),
		onSuccess(store) {
			queryClient.invalidateQueries({
				queryKey: ["profile"],
			});
			toast.success("Магазин создан");
			router.push(STORE_URL.home(store.id));
		},
		onError() {
			toast.error("Ошибка при создании магазина");
		},
	});

	return useMemo(
		() => ({ createStore, isLoadingCreate }),
		[createStore, isLoadingCreate],
	);
};

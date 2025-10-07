import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { useMemo } from "react";

import { storeService } from "../../services/store.service";
import { IStoreEdit } from "../../types/store.interface";

export const useUpdateStore = () => {
	const params = useParams<{ storeId: string }>();
	const queryClient = useQueryClient();

	const { data: store } = useQuery({
		queryKey: ["store", params!.storeId],
		queryFn: () => storeService.getById(params!.storeId),
	});

	const { mutate: updateStore, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ["update store"],
		mutationFn: (data: IStoreEdit) =>
			storeService.update(params!.storeId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["store", params!.storeId],
			});
			toast.success("Магазин обнавлен");
		},
		onError() {
			toast.error("Ошибка при обновлении магазина");
		},
	});

	return useMemo(
		() => ({ store, updateStore, isLoadingUpdate }),
		[store, updateStore, isLoadingUpdate],
	);
};

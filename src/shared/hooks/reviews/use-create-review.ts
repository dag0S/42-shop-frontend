import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { useMemo } from "react";

import type { IReviewInput } from "../../types/review.interface";
import { reviewService } from "../../services/review.service";

export const useCreateReview = (storeId: string) => {
	const params = useParams<{ id: string }>();
	const queryClient = useQueryClient();

	const { mutate: createReview, isPending: isLoadingCreate } = useMutation({
		mutationKey: ["create review"],
		mutationFn: (data: IReviewInput) =>
			reviewService.create(data, storeId, params?.id || ""),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["product"],
			});
			toast.success("Отзыв создан");
		},
		onError() {
			toast.error("Ошибка при создании отзыва");
		},
	});

	return useMemo(
		() => ({ createReview, isLoadingCreate }),
		[createReview, isLoadingCreate],
	);
};

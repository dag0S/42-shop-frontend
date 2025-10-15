import type { FC } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import type { IProduct } from "@/src/shared/types/product.interface";
import { useProfile } from "@/src/shared/hooks";
import { userService } from "@/src/shared/services/user.service";
import { Button } from "@/src/shared/shadcn/ui";

interface Props {
	product: IProduct;
}

export const FavoriteButton: FC<Props> = ({ product }) => {
	const { user } = useProfile();

	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ["toggle favorite"],
		mutationFn: () => userService.toggleFavorite(product.id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ["profile"],
			});
		},
	});

	if (!user) return null;

	const isExists = user.favorites.some(
		(favorite) => favorite.id === product.id,
	);

	return (
		<Button
			variant="secondary"
			size="icon"
			onClick={() => mutate()}
			disabled={isPending}
		>
			{isExists ? (
				<AiFillHeart color="#F43F5E" className="size-5" />
			) : (
				<AiOutlineHeart className="size-5" />
			)}
		</Button>
	);
};

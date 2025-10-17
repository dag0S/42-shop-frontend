import type { FC } from "react";
import { Minus, Plus } from "lucide-react";

import type { ICartItem } from "@/src/shared/types/cart.interface";
import { useAppDispatch, useCart } from "@/src/shared/hooks";
import { Button } from "@/src/shared/shadcn/ui";
import { cartSliceActions } from "@/src/widgets/Cart";

interface Props {
	item: ICartItem;
}

export const CartActions: FC<Props> = ({ item }) => {
	const dispatch = useAppDispatch();

	const { items } = useCart();
	const quantity = items.find((cartItem) => cartItem.id === item.id)?.quantity;

	return (
		<div className="flex items-center mt-1">
			<Button
				onClick={() =>
					dispatch(
						cartSliceActions.changeQuantity({ id: item.id, type: "minus" }),
					)
				}
				variant="ghost"
				size="icon"
				disabled={quantity === 1}
				className="size-7"
			>
				<Minus className="size-4" />
			</Button>
			<input
				disabled
				readOnly
				value={quantity}
				className="w-10 text-center text-sm"
			/>
			<Button
				onClick={() =>
					dispatch(
						cartSliceActions.changeQuantity({ id: item.id, type: "plus" }),
					)
				}
				variant="ghost"
				size="icon"
				className="size-7"
			>
				<Plus className="size-4" />
			</Button>
		</div>
	);
};

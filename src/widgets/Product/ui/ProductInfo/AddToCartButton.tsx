"use client";

import type { FC } from "react";

import type { IProduct } from "@/src/shared/types/product.interface";
import { Button } from "@/src/shared/shadcn/ui";
import { useAppDispatch, useCart } from "@/src/shared/hooks";
import { cartSliceActions } from "@/src/widgets/Cart";

interface Props {
	product: IProduct;
}

export const AddToCartButton: FC<Props> = ({ product }) => {
	const dispatch = useAppDispatch();
	const { items } = useCart();
	const { removeFromCart, addToCart } = cartSliceActions;

	const currentElement = items.find((item) => item.product.id === product.id);

	return (
		<Button
			size="lg"
			onClick={() =>
				currentElement
					? dispatch(removeFromCart({ id: currentElement.id }))
					: dispatch(addToCart({ product, quantity: 1, price: product.price }))
			}
			className="w-full"
		>
			{currentElement ? "Удалить из корзины" : "Добавить в корзину"}
		</Button>
	);
};

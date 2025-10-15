import type { FC } from "react";

import type { IProduct } from "@/src/shared/types/product.interface";
import { Button } from "@/src/shared/shadcn/ui";

interface Props {
	product: IProduct;
}

export const AddToCartButton: FC<Props> = ({ product }) => {
	return (
		<Button size="lg" className="w-full">
			Добавить в корзину
		</Button>
	);
};

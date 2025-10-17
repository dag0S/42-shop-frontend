import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import type { ICartItem } from "@/src/shared/types/cart.interface";
import { PUBLIC_URL } from "@/src/shared/config/url.config";
import { formatPrice } from "@/src/shared/utils";
import { CartActions } from "./CartActions";

interface Props {
	item: ICartItem;
}

export const CartItem: FC<Props> = ({ item }) => {
	return (
		<div className="flex items-center mb-5">
			<Link href={PUBLIC_URL.product(item.product.id)} className="relative h-28 w-28 rounded-md overflow-hidden">
				<Image src={item.product.images[0]} alt={item.product.title} fill className="object-cover" />
			</Link>
			<div className="ml-6">
				<h2 className="font-medium line-clamp-1">{item.product.title}</h2>
				<p className="text-sm text-muted-foreground mt-1">{formatPrice(item.product.price)}</p>
				<CartActions item={item} />
			</div>
		</div>
	);
};

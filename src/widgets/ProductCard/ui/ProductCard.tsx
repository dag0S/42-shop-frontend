import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import type { Props } from "./ProductCard.props";
import { PUBLIC_URL } from "@/src/shared/config/url.config";
import { formatPrice } from "@/src/shared/utils";

export const ProductCard: FC<Props> = ({ product }) => {
	return (
		<div className="transition-all ease-in-out hover:scale-105">
			<Link href={PUBLIC_URL.product(product.id)}>
				<Image
					src={product.images[0]}
					alt={product.title}
					width={300}
					height={300}
					className="rounded-lg aspect-square object-cover"
				/>
			</Link>
			<h3 className="mt-4 font-semibold text-foreground line-clamp-1">
				{product.title}
			</h3>
			<Link
				href={PUBLIC_URL.category(product.category.id)}
				className="mt-1 text-sm text-muted-foreground"
			>
				{product.category.title}
			</Link>
			<p className="mt-1 font-medium text-sm text-secondary-foreground">
				{formatPrice(product.price)}
			</p>
		</div>
	);
};

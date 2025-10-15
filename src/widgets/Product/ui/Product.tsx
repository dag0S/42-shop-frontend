"use client";

import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";

import type { Props } from "./Product.props";
import { productService } from "@/src/shared/services/product.service";
import { Catalog } from "../../Catalog/ui/Catalog";
import { ProductGallery } from "./ProductGallery/ProductGallery";
import { ProductInfo } from "./ProductInfo/ProductInfo";
import { ProductReviews } from "./ProductReviews/ProductReviews";

export const Product: FC<Props> = ({
	initialProduct,
	similarProducts,
	id = "",
}) => {
	const { data: product } = useQuery({
		queryKey: ["product", initialProduct.id],
		queryFn: () => productService.getById(id),
		initialData: initialProduct,
		enabled: !!id,
	});

	return (
		<div className="mx-auto max-w-7xl">
			<div className="space-y-7 px-4 py-10 sm:px-6 lg:px-8">
				<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
					<ProductGallery product={product} />
					<ProductInfo product={product} />
				</div>
			</div>
			<Catalog title="Похожие товары" products={similarProducts} />
			<ProductReviews product={product} />
		</div>
	);
};

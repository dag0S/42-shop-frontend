import type { FC } from "react";
import type { Metadata } from "next";

import { Catalog } from "@/src/widgets/Catalog/ui/Catalog";
import { productService } from "@/src/shared/services/product.service";
import { categoryService } from "@/src/shared/services/category.service";

export const revalidate = 60;

const getProducts = async (id: string) => {
	const products = await productService.getByCategoryId(id);

	const category = await categoryService.getById(id);

	return { products, category };
};

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{
		id: string;
	}>;
}): Promise<Metadata> => {
	const { id } = await params;
	const { category, products } = await getProducts(id);

	return {
		title: category.title,
		description: category.description,
		openGraph: {
			images: [
				{
					url: products[0].images[0],
					width: 1000,
					height: 1000,
					alt: category.title,
				},
			],
		},
	};
};

const CategoryPage: FC<{ params: Promise<{ id: string }> }> = async ({
	params,
}) => {
	const { id } = await params;
	const { category, products } = await getProducts(id);

	return (
		<div className="my-6">
			<Catalog
				title={category.title}
				description={category.description}
				products={products}
			/>
		</div>
	);
};

export default CategoryPage;

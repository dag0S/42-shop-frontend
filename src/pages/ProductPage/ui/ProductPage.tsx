import type { FC } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { productService } from "@/src/shared/services/product.service";
import { Product } from "@/src/widgets/Product";

export const revalidate = 60;

export const generateStaticParams = async () => {
	const products = await productService.getAll();

	const paths = products.map((product) => ({
		params: { id: product.id },
	}));

	return paths;
};

const getProducts = async (id: string) => {
	try {
		const product = await productService.getById(id);

		const similarProducts = await productService.getSimilar(id);

		return { product, similarProducts };
	} catch {
		return notFound();
	}
};

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{
		id: string;
	}>;
}): Promise<Metadata> => {
	const { id } = await params;
	const { product } = await getProducts(id);

	return {
		title: product.title,
		description: product.description,
		openGraph: {
			images: [
				{
					url: product.images[0],
					width: 1000,
					height: 1000,
					alt: product.title,
				},
			],
		},
	};
};

const ProductPage: FC<{ params: Promise<{ id: string }> }> = async ({
	params,
}) => {
	const { id } = await params;
	const { product, similarProducts } = await getProducts(id);

	return (
		<div className="my-6">
			<Product
				initialProduct={product}
				similarProducts={similarProducts}
				id={id}
			/>
		</div>
	);
};

export default ProductPage;

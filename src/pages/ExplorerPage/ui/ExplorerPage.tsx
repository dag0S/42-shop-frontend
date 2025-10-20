import type { FC } from "react";
import type { Metadata } from "next";
import { connection } from "next/server";

import { productService } from "@/src/shared/services/product.service";
import { Explorer } from "@/src/widgets/Explorer";

export const metadata: Metadata = {
	title: "Каталог товаров",
};

export const revalidate = 60;

const getProducts = async () => {
	const data = await productService.getAll();

	return data;
};

const ExplorerPage: FC = async () => {
	const data = await getProducts();
	await connection();

	return <Explorer products={data} />;
};

export default ExplorerPage;

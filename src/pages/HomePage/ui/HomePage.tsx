import type { FC } from "react";
import type { Metadata } from "next";

import { productService } from "@/src/shared/services/product.service";
import { Home } from "@/src/widgets/Home";

export const metadata: Metadata = {
	title:
		"Покупайте мерч ваших любимых стримеров 5opka и Mellsher в одном месте!",
};

export const revalidate = 60;

const getProducts = async () => {
	const data = (await productService.getMostPopular()).slice(0, 6);

	return data;
};

const HomePage: FC = async () => {
	const data = await getProducts();

	return <Home products={data} />;
};

export default HomePage;

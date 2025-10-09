import type { FC } from "react";
import { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { CreateProduct } from "@/src/widgets/CreateProduct";

export const metadata: Metadata = {
	title: "Создание товара",
	...NO_INDEX_PAGE,
};

const CreateProductPage: FC = () => {
	return <CreateProduct />;
};

export default CreateProductPage;

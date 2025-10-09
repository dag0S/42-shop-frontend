import { Metadata } from "next";
import type { FC } from "react";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { ProductEdit } from "@/src/widgets/ProductEdit";

export const metadata: Metadata = {
	title: "Настройки товара",
	...NO_INDEX_PAGE,
};

const ProductEditPage: FC = () => {
	return <ProductEdit />;
};

export default ProductEditPage;

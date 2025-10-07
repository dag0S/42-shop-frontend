import { Metadata } from "next";
import type { FC } from "react";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { Products } from "@/src/widgets/Products";

export const metadata: Metadata = {
	title: "Товары",
	...NO_INDEX_PAGE,
};

const ProductsPage: FC = () => {
	return <Products />;
};

export default ProductsPage;

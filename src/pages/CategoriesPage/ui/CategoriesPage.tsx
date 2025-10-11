import { Metadata } from "next";
import type { FC } from "react";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { Categories } from "@/src/widgets/Categories";

export const metadata: Metadata = {
	title: "Категории",
	...NO_INDEX_PAGE,
};

const CategoriesPage: FC = () => {
	return <Categories />;
};

export default CategoriesPage;

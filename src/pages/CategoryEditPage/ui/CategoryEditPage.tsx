import { Metadata } from "next";
import type { FC } from "react";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { CategoryEdit } from "@/src/widgets/CategoryEdit";

export const metadata: Metadata = {
	title: "Настройки категории",
	...NO_INDEX_PAGE,
};

const CategoryEditPage: FC = () => {
	return <CategoryEdit />;
};

export default CategoryEditPage;

import type { FC } from "react";
import { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { CreateCategory } from "@/src/widgets/CreateCategory";

export const metadata: Metadata = {
	title: "Создание категории",
	...NO_INDEX_PAGE,
};

const CreateCategoryPage: FC = () => {
	return <CreateCategory />;
};

export default CreateCategoryPage;

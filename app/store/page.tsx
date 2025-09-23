import type { FC } from "react";
import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";

export const metadata: Metadata = {
	title: "Управление магазином",
	...NO_INDEX_PAGE,
};

const StorePage: FC = () => {
	return <div></div>;
};

export default StorePage;

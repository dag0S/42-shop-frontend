import { Metadata } from "next";
import type { FC } from "react";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { Colors } from "@/src/widgets/Colors";

export const metadata: Metadata = {
	title: "Цвета",
	...NO_INDEX_PAGE,
};

const ColorsPage: FC = () => {
	return <Colors />;
};

export default ColorsPage;

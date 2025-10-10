import { Metadata } from "next";
import type { FC } from "react";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { ColorEdit } from "@/src/widgets/ColorEdit";

export const metadata: Metadata = {
	title: "Настройки цвета",
	...NO_INDEX_PAGE,
};

const ColorEditPage: FC = () => {
	return <ColorEdit />;
};

export default ColorEditPage;

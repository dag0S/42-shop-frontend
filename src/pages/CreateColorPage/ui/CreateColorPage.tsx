import type { FC } from "react";
import { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { CreateColor } from "@/src/widgets/CreateColor";

export const metadata: Metadata = {
	title: "Создание цвета",
	...NO_INDEX_PAGE,
};

const CreateColorPage: FC = () => {
	return <CreateColor />;
};

export default CreateColorPage;

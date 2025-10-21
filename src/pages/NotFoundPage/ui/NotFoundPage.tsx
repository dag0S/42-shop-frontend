import type { FC } from "react";
import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { NotFound } from "@/src/widgets/NotFound";

export const metadata: Metadata = {
	title: "404",
	...NO_INDEX_PAGE,
};

const NotFoundPage: FC = () => {
	return <NotFound />;
};

export default NotFoundPage;

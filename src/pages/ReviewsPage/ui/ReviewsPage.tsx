import { Metadata } from "next";
import type { FC } from "react";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { Reviews } from "@/src/widgets/Reviews";

export const metadata: Metadata = {
	title: "Отзывы",
	...NO_INDEX_PAGE,
};

const ReviewsPage: FC = () => {
	return <Reviews />;
};

export default ReviewsPage;

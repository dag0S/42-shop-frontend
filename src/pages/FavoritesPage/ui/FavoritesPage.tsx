import type { FC } from "react";
import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { Favorites } from "@/src/widgets/Favorites";

export const metadata: Metadata = {
	title: "Избранное",
	...NO_INDEX_PAGE,
};

const FavoritesPage: FC = () => {
	return <Favorites />;
};

export default FavoritesPage;

import type { FC } from "react";
import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { Dashboard } from "@/src/widgets/Dashboard";

export const metadata: Metadata = {
	title: "Личный кабинет",
	...NO_INDEX_PAGE,
};

const DashBoardPage: FC = () => {
	return <Dashboard />;
};

export default DashBoardPage;

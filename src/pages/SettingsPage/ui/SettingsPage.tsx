import type { Metadata } from "next";
import type { FC } from "react";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { Settings } from "@/src/widgets/Settings";

export const metadata: Metadata = {
	title: "Настройки магазина",
	...NO_INDEX_PAGE,
};

const SettingsPage: FC = () => {
	return <Settings />;
};

export default SettingsPage;

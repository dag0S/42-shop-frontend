"use client";

import type { FC } from "react";

import { Heading } from "@/src/shared/ui";
import { MainStatistics } from "./MainStatistics/MainStatistics";
import { MiddleStatistics } from "./MiddleStatistics/MiddleStatistics";

export const Store: FC = () => {
	return (
		<div className="p-6">
			<Heading title="Статистика" />
			<MainStatistics />
			<MiddleStatistics />
		</div>
	);
};

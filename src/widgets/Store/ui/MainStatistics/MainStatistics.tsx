import type { FC } from "react";

import { useGetStatistics } from "@/src/shared/hooks/use-get-statistics";
import { MainStatisticsItem } from "./MainStatisticsItem";

export const MainStatistics: FC = () => {
	const { main } = useGetStatistics();

	return (
		<div className="mt-3 grid grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-4">
			{main?.length ? (
				main.map((item) => <MainStatisticsItem key={item.id} item={item} />)
			) : (
				<div>Нет данных для статистики</div>
			)}
		</div>
	);
};

import type { FC } from "react";

import { useGetStatistics } from "@/src/shared/hooks/use-get-statistics";
import { Overview } from "../Overview/Overview";
import { LastUsers } from "../LastUsers/LastUsers";

export const MiddleStatistics: FC = () => {
	const { middle } = useGetStatistics();

	return (
		<div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-7">
			{middle?.monthlySales.length || middle?.lastUsers.length ? (
				<>
					<div className="col-span-1 lg:col-span-3 xl:col-span-4">
						<Overview data={middle.monthlySales} />
					</div>
					<div className="col-span-1 lg:col-span-3">
						<LastUsers data={middle.lastUsers} />
					</div>
				</>
			) : (
				<div>Нет данных для статистики</div>
			)}
		</div>
	);
};

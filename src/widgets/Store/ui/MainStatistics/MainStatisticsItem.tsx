import type { FC } from "react";
import CountUp from "react-countup";

import type { IMainStatistics } from "@/src/shared/types/statistics.interface";
import { getIcon } from "../../utils/statistics.util";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/src/shared/shadcn/ui";
import { formatPrice } from "@/src/shared/utils";

interface Props {
	item: IMainStatistics;
}

export const MainStatisticsItem: FC<Props> = ({ item }) => {
	const Icon = getIcon(item.id);

	return (
		<Card className="drop-shadow-sm">
			<CardHeader className="p-4 flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium text-secondary-foreground">
					{item.name}
				</CardTitle>
				<Icon className="size-5" />
			</CardHeader>
			<CardContent className="px-4 py-2">
				<h2 className="text-2xl font-bold">
					{item.id !== 1 ? (
						<CountUp end={item.value} />
					) : (
						<CountUp end={item.value} formattingFn={formatPrice} />
					)}
				</h2>
			</CardContent>
		</Card>
	);
};

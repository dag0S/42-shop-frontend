import type { FC } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import type { Props } from "./Overview.props";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/src/shared/shadcn/ui";
import { formatPrice } from "@/src/shared/utils";

const chartConfig = {
	value: {
		label: "Прибыль",
		color: "#3B82F6",
	},
} satisfies ChartConfig;

export const Overview: FC<Props> = ({ data }) => {
	return (
		<Card>
			<CardHeader className="flex flex-col items-stretch space-y-0 border-b">
				<CardTitle className="text-xl font-medium tracking-[0.1px] line-clamp-1">
					Прибыль
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					className="aspect-auto h-[310px] w-full"
					config={chartConfig}
				>
					<AreaChart
						accessibilityLayer
						data={data}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									labelFormatter={formatPrice}
									indicator="line"
								/>
							}
						/>
						<Area
							dataKey="value"
							type="natural"
							fill="var(--color-value)"
							stroke="var(--color-value)"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};

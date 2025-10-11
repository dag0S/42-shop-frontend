"use client";

import { useParams } from "next/navigation";
import type { FC } from "react";

import { formatDate } from "@/src/shared/utils";
import { DataTable, DataTableLoading, Heading } from "@/src/shared/ui";
import { useGetReviews } from "@/src/shared/hooks";
import {
	type IReviewColumn,
	reviewColumns,
} from "./ReviewColumns/ReviewColumns";

export const Reviews: FC = () => {
	const { reviews, isLoading } = useGetReviews();

	const formattedReviews: IReviewColumn[] = reviews
		? reviews.map((review) => ({
				id: review.id,
				createdAt: formatDate(review.createdAt),
				rating: Array.from({ length: review.rating })
					.map(() => "⭐")
					.join(" "),
				username: review.user.name,
			}))
		: [];

	return (
		<div className="p-6">
			{isLoading ? (
				<DataTableLoading />
			) : (
				<>
					<div className="flex items-center justify-between">
						<Heading
							title={`Отзывы (${Reviews?.length})`}
							description="Все отзывы магазина"
						/>
					</div>
					<div className="mt-3">
						<DataTable
							columns={reviewColumns}
							data={formattedReviews}
							filterKey="name"
						/>
					</div>
				</>
			)}
		</div>
	);
};

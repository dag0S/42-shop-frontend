import type { FC } from "react";
import Image from "next/image";

import type { Props } from "./LastUsers.props";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/src/shared/shadcn/ui";
import { formatPrice } from "@/src/shared/utils";

export const LastUsers: FC<Props> = ({ data }) => {
	return (
		<Card>
			<CardHeader className="flex flex-col items-stretch space-y-0 border-b">
				<CardTitle className="text-xl font-medium tracking-[0.1px] line-clamp-1">
					Прибыль
				</CardTitle>
			</CardHeader>
			<CardContent>
				{data.length ? (
					data.map((user) => (
						<div key={user.id} className="flex items-center mt-5">
							<Image
								src={user.picture}
								alt={user.name}
								width={40}
								height={40}
								className="rounded-full"
							/>
							<div className="ml-4 space-y-1 text-sm">
								<p className="leading-none font-medium">{user.name}</p>
								<p className="text-muted-foreground">{user.email}</p>
							</div>
							<div className="ml-auto font-medium">
								+{formatPrice(user.total)}
							</div>
						</div>
					))
				) : (
					<div>Нет покупателей</div>
				)}
			</CardContent>
		</Card>
	);
};

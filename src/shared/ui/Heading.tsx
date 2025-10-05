import type { FC } from "react";

import { cn } from "../lib/utils";

interface Props {
	title: string;
	description?: string;
	className?: string;
}

export const Heading: FC<Props> = ({ title, description, className }) => {
	return (
		<div className="space-y-1">
			<h2 className={cn("text-2xl font-medium", className)}>{title}</h2>
			{description && (
				<p className="text-sm text-muted-foreground"> {description}</p>
			)}
		</div>
	);
};

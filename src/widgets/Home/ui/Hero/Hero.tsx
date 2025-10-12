import type { FC } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/src/shared/lib/utils";
import { SITE_DESCRIPTION } from "@/src/shared/constants/seo.constants";
import { PUBLIC_URL } from "@/src/shared/config/url.config";
import { Button } from "@/src/shared/shadcn/ui";

interface Props {
	className?: string;
}

export const Hero: FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				"my-24 py-20 mx-auto text-center flex flex-col items-center max-w-4xl space-y-6",
				className,
			)}
		>
			<h1 className="text-4xl font-bold tracking-tight md:text-5xl">
				Мерч стримеров 5opka и MellSher для
				<span className="text-blue-600"> 42 братух</span>
			</h1>
			<p className="text-lg text-muted-foreground">{SITE_DESCRIPTION}</p>
			<Link href={PUBLIC_URL.explorer()}>
				<Button className="group">
					За покупками
					<ArrowRight className="size-4 transition-all group-hover:ml-2" />
				</Button>
			</Link>
		</div>
	);
};

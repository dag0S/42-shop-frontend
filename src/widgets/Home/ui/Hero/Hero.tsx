import type { FC } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/src/shared/lib/utils";
import { SITE_DESCRIPTION } from "@/src/shared/constants/seo.constants";
import { PUBLIC_URL } from "@/src/shared/config/url.config";
import { Button } from "@/src/shared/shadcn/ui";
import { Slider } from "./Slider";

interface Props {
	className?: string;
}

export const Hero: FC<Props> = ({ className }) => {
	return (
		<div className={cn("my-6 relative", className)}>
			<div className="text-center flex flex-col items-center space-y-6 mx-auto max-w-4xl absolute z-20 left-1/2 top-1/2 -translate-1/2">
				<h1 className="text-2xl sm:text-4xl font-bold tracking-tight md:text-5xl text-white">
					Мерч <span className="text-blue-600">5opka</span> и{" "}
					<span className="text-blue-600">Mellsher</span>
				</h1>
				<p className="hidden md:block text-lg text-white">{SITE_DESCRIPTION}</p>
				<Link href={PUBLIC_URL.explorer()}>
					<Button className="group">
						За покупками
						<ArrowRight className="size-4 transition-all group-hover:ml-2" />
					</Button>
				</Link>
			</div>
			<Slider />
		</div>
	);
};

import type { FC } from "react";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants";
import { Button } from "@/src/shared/shadcn/ui";
import { PUBLIC_URL } from "@/src/shared/config/url.config";

export const metadata: Metadata = {
	title: "ThanksPage",
	...NO_INDEX_PAGE,
};

const ThanksPage: FC = () => {
	return (
		<div className="my-24 py-20 mx-auto text-center flex flex-col items-center max-w-4xl space-y-6">
			<h1 className="text-4xl font-bold tracking-tight md:text-5xl">
				Спасибо за покупку
			</h1>
			<p className="text-lg text-muted-foreground">
				Спасибо за Ваш заказ! Мы ценим ваше доверие и приложим все усилия, чтобы
				доставить Ваш заказ как можно скорее.
			</p>
			<Link href={PUBLIC_URL.home()}>
				<Button className="group">
					На главную
					<ArrowRight className="size-4 transition-all group-hover:ml-2" />
				</Button>
			</Link>
		</div>
	);
};

export default ThanksPage;

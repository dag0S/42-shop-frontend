import Link from "next/link";
import type { FC } from "react";
import Image from "next/image";

import { PUBLIC_URL } from "../config/url.config";
import { SITE_NAME } from "../constants/seo.constants";
import { cn } from "../lib/utils";

interface Props {
	className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
	return (
		<Link
			href={PUBLIC_URL.home()}
			className={cn(
				"flex items-center gap-3 hover:opacity-75 transition-opacity text-2xl font-bold text-blue-600",
				className,
			)}
		>
			<Image src="/images/logo.svg" alt={SITE_NAME} width={150} height={36} className="min-w-[150px]" />
		</Link>
	);
};

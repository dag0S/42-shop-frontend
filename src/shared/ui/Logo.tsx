import Link from "next/link";
import type { FC } from "react";
import Image from "next/image";

import { PUBLIC_URL } from "../config/url.config";
import { SITE_NAME } from "../constants/seo.constants";

export const Logo: FC = () => {
	return (
		<Link
			href={PUBLIC_URL.home()}
			className="flex items-center gap-3 hover:opacity-75 transition-opacity text-2xl font-bold text-blue-600"
		>
			<Image src="/images/42.jpg" alt={SITE_NAME} width={35} height={35} />
			<div>{SITE_NAME}</div>
		</Link>
	);
};

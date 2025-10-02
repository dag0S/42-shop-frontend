"use client";

import type { FC } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaYandex } from "react-icons/fa";

import { cn } from "@/src/shared/lib/utils";
import { Button } from "@/src/shared/shadcn/ui";
import { Props } from "./Social.props";
import { SERVER_URL } from "@/src/shared/config/api.config";

export const Social: FC<Props> = ({ className }) => {
	const router = useRouter();

	return (
		<div className={cn(className, "space-y-3 w-full mt-5")}>
			<Button
				className="w-full"
				variant="outline"
				onClick={() => router.push(`${SERVER_URL}/auth/google`)}
			>
				<FcGoogle className="size-5 mr-2" />
				Продолжить через Google
			</Button>
			<Button
				className="w-full"
				variant="outline"
				onClick={() => router.push(`${SERVER_URL}/auth/yandex`)}
			>
				<FaYandex className="size-5 mr-2" color="#FC3F1D" />
				Продолжить через Яндекс
			</Button>
		</div>
	);
};

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { FC } from "react";

import { PUBLIC_URL } from "@/src/shared/config/url.config";
import { Button } from "@/src/shared/shadcn/ui";

export const NotFound: FC = () => {
	const router = useRouter();

	return (
		<div className="h-screen w-full flex justify-center items-center p-4">
			<div className="flex flex-col gap-3 justify-center items-center max-w-[500px]">
				<div className="text-8xl">404</div>
				<h1>Возможно вы ошиблись, такой страницы не существует</h1>
				<Button onClick={() => router.push(PUBLIC_URL.home())}>
					На главную
				</Button>
				<Image
					src="https://api.capy.lol/v1/capybara"
					alt="Капибара"
					width={660}
					height={495}
					className="max-h-[400px] object-cover"
				/>
			</div>
		</div>
	);
};

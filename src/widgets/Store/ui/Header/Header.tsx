"use client";

import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { useProfile } from "@/src/shared/hooks";
import { DASHBOARD_URL } from "@/src/shared/config/url.config";
import { Loader } from "@/src/shared/ui";
import { MobileSidebar } from "../MobileSidebar/MobileSidebar";

export const Header: FC = () => {
	const { user, isLoading } = useProfile();

	return (
		<div className="p-6 gap-x-4 h-full flex items-center bg-white border-b">
			<MobileSidebar />
			<div className="flex items-center gap-x-4 ml-auto">
				{isLoading ? (
					<Loader size="sm" />
				) : (
					user && (
						<>
							<Link href={DASHBOARD_URL.home()} />
							<Image
								src={user.picture}
								alt={user.name}
								width={42}
								height={42}
								className="rounded-full"
							/>
						</>
					)
				)}
			</div>
		</div>
	);
};

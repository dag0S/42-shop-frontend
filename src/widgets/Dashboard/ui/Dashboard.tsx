"use client";

import { useEffect, type FC } from "react";
import { useSearchParams } from "next/navigation";

import { saveTokenStorage } from "@/src/shared/services/auth-token.service";

export const Dashboard: FC = () => {
	const searchParams = useSearchParams();

	useEffect(() => {
		const accessToken = searchParams?.get("accessToken");

		if (accessToken) {
			saveTokenStorage(accessToken);
		}
	}, [searchParams]);

	return <div>Dashboard</div>;
};

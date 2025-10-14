"use client";

import type { FC } from "react";

import { useProfile } from "@/src/shared/hooks";
import { Catalog } from "../../Catalog/ui/Catalog";

export const Favorites: FC = () => {
	const { user } = useProfile();

	if (!user) return null;

	return (
		<div className="my-6">
			<Catalog title="Избранное" products={user.favorites} />
		</div>
	);
};

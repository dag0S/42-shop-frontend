"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import type { FC } from "react";

import { ColorForm } from "../../ColorForm";
import { colorService } from "@/src/shared/services/color.service";

export const ColorEdit: FC = () => {
	const params = useParams<{ colorId: string }>();

	const { data: color } = useQuery({
		queryKey: ["get color"],
		queryFn: () => colorService.getById(params?.colorId || ""),
	});

	return <ColorForm color={color} />;
};

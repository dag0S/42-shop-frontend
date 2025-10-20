"use client";

import { X } from "lucide-react";
import { useState, type FC, type ReactNode } from "react";

import { Button } from "../shadcn/ui";

interface Props {
	children: ReactNode;
}

export const Announcement: FC<Props> = ({ children }) => {
	const [isShow, setIsShow] = useState(true);

	if (!isShow) {
		return null;
	}

	return (
		<div className="text-sm md:text-base bg-primary text-background font-semibold p-2 flex items-center justify-center gap-3 text-center">
			{children}
			<Button variant="ghost" size="icon" onClick={() => setIsShow(false)}>
				<X className="size-4" />
			</Button>
		</div>
	);
};

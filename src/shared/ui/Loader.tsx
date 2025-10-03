import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import type { FC } from "react";

import { cn } from "../lib/utils";

const iconVariants = cva("animate-spin text-muted-foreground", {
	variants: {
		size: {
			default: "size-9",
			sm: "size-6",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

type TypeIconVariants = VariantProps<typeof iconVariants>;

export const Loader: FC<TypeIconVariants> = ({ size }) => {
	return <LoaderCircle className={cn(iconVariants({ size }))} />;
};

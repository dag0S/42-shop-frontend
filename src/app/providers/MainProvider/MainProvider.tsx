"use client";

import { type FC } from "react";
import { Toaster } from "react-hot-toast";

import type { Props } from "./MainProvider.props";
import { TanStackQueryProvider } from "../TanStackQueryProvider/TanStackQueryProvider";
import { StoreProvider } from "../StoreProvider";

export const MainProvider: FC<Props> = ({ children }) => {
	return (
		<TanStackQueryProvider>
			<StoreProvider>
				<Toaster />
				{children}
			</StoreProvider>
		</TanStackQueryProvider>
	);
};

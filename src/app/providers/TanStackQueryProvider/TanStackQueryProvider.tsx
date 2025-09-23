"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type FC } from "react";

import type { Props } from "./TanStackQueryProviderProps";

export const TanStackQueryProvider: FC<Props> = ({ children }) => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		}),
	);
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

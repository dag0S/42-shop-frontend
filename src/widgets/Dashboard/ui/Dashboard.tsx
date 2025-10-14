"use client";

import { useEffect, type FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";

import { saveTokenStorage } from "@/src/shared/services/auth-token.service";
import { authService } from "@/src/shared/services/auth.service";
import { PUBLIC_URL } from "@/src/shared/config/url.config";
import { orderColumns, type IOrderColumn } from "./OrderColumns/OrderColumns";
import { formatDate, formatPrice } from "@/src/shared/utils";
import { EnumOrderStatus } from "@/src/shared/types/order.interface";
import { useProfile } from "@/src/shared/hooks";
import { Button } from "@/src/shared/shadcn/ui";
import { DataTable } from "@/src/shared/ui";

export const Dashboard: FC = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { user } = useProfile();

	useEffect(() => {
		const accessToken = searchParams?.get("accessToken");

		if (accessToken) {
			saveTokenStorage(accessToken);
		}
	}, [searchParams]);

	const { mutate: logout } = useMutation({
		mutationKey: ["logout"],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push(PUBLIC_URL.auth()),
	});

	if (!user) return null;

	const formattedOrders: IOrderColumn[] = user.orders.map((order) => ({
		createdAt: formatDate(order.createdAt),
		status: order.status === EnumOrderStatus.PENDING ? "В ожидании" : "Оплачен",
		total: formatPrice(order.total),
	}));

	return (
		<div className="my-6">
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-2xl font-bold">Ваши заказы</h1>
				<Button variant="ghost" onClick={() => logout()}>
					<LogOut className="size-4 mr-2" />
					Выйти
				</Button>
			</div>
			<DataTable columns={orderColumns} data={formattedOrders} />
		</div>
	);
};

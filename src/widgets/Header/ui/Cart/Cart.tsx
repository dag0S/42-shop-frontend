"use client";

import { useRouter } from "next/navigation";
import type { FC } from "react";

import {
	Button,
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/src/shared/shadcn/ui";
import { Heading } from "@/src/shared/ui";
import { useCart, useCheckout, useProfile } from "@/src/shared/hooks";
import { formatPrice } from "@/src/shared/utils";
import { CartItem } from "./CartItem";
import { PUBLIC_URL } from "@/src/shared/config/url.config";

export const Cart: FC = () => {
	const router = useRouter();
	const { items, total } = useCart();
	const { createPayment, isLoadingCreate } = useCheckout();
	const { user } = useProfile();

	const handleClick = () => {
		user ? createPayment() : router.push(PUBLIC_URL.auth());
	};

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost">Корзина</Button>
			</SheetTrigger>
			<SheetContent className="h-full flex flex-col p-6">
				<Heading title="Корзина товаров" className="text-xl" />
				<div className="flex flex-col w-full flex-1">
					{items.length ? (
						items.map((item) => <CartItem item={item} key={item.id} />)
					) : (
						<div className="not_found">Корзина пустая</div>
					)}
				</div>
				{items.length ? (
					<>
						<div className="text-lg font-medium">
							Всего к оплате: {formatPrice(total)}
						</div>
						<Button
							onClick={handleClick}
							disabled={isLoadingCreate}
							className="w-full"
						>
							Перейти к оплате
						</Button>
					</>
				) : null}
			</SheetContent>
		</Sheet>
	);
};

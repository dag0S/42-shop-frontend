import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useMemo } from "react";

import { useCart } from "../use-cart";
import { orderService } from "../../services/order.service";
import { useAppDispatch } from "../use-redux";
import { cartSliceActions } from "@/src/widgets/Cart";

export const useCheckout = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { items } = useCart();

	const { mutate: createPayment, isPending: isLoadingCreate } = useMutation({
		mutationKey: ["create order and payment"],
		mutationFn: () =>
			orderService.place({
				items: items.map((item) => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id,
					storeId: item.product.storeId,
				})),
			}),
		onSuccess({ data }) {
			router.push(data.confirmation.confirmation_url);
			dispatch(cartSliceActions.reset());
		},
		onError() {
			toast.error("Ошибка при создании платежа");
		},
	});

	return useMemo(
		() => ({
			createPayment,
			isLoadingCreate,
		}),
		[createPayment, isLoadingCreate],
	);
};

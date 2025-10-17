import { useAppSelector } from "./use-redux";

export const useCart = () => {
	const items = useAppSelector((state) => state.cart.items);

	const total = items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0,
	);

	return { items, total };
};

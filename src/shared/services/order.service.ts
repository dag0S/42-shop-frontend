import { axiosWithAuth } from "../api/api.interceptor";
import { API_URL } from "../config/api.config";
import { EnumOrderStatus, type IPaymentResponse } from "../types/order.interface";

type TypeData = {
	status?: EnumOrderStatus;
	items: {
		quantity: number;
		price: number;
		productId: string;
		storeId: string;
	}[];
};

class OrderService {
	async place(data: TypeData) {
		return await axiosWithAuth<IPaymentResponse>({
			url: API_URL.orders("place"),
			method: "POST",
			data,
		});
	}
}

export const orderService = new OrderService();

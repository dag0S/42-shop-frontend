import { axiosWithAuth } from "../api/api.interceptor";
import { API_URL } from "../config/api.config";
import type { IColor, IColorInput } from "../types/color.interface";

class ColorService {
	async getByStoreId(storeId: string) {
		const { data } = await axiosWithAuth<IColor[]>({
			url: API_URL.colors(`/get-all/${storeId}`),
			method: "GET",
		});

		return data || [];
	}

	async getById(id: string) {
		const { data } = await axiosWithAuth<IColor>({
			url: API_URL.colors(`/${id}`),
			method: "GET",
		});

		return data;
	}

	async create(data: IColorInput, storeId: string) {
		const { data: createdColor } = await axiosWithAuth<IColor>({
			url: API_URL.colors(`/${storeId}`),
			method: "POST",
			data,
		});

		return createdColor;
	}

	async update(id: string, data: IColorInput) {
		const { data: updatedColor } = await axiosWithAuth<IColor>({
			url: API_URL.colors(`/${id}`),
			method: "PUT",
			data,
		});

		return updatedColor;
	}

	async delete(id: string) {
		const { data } = await axiosWithAuth<IColor>({
			url: API_URL.colors(`/${id}`),
			method: "DELETE",
		});

		return data;
	}
}

export const colorService = new ColorService();

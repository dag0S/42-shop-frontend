import { axiosWithAuth } from "../api/api.interceptor";
import { API_URL } from "../config/api.config";
import type { ICategory, ICategoryInput } from "../types/category.interface";

class CategoryService {
	async getByStoreId(storeId: string) {
		const { data } = await axiosWithAuth<ICategory[]>({
			url: API_URL.categories(`/get-all/${storeId}`),
			method: "GET",
		});

		return data;
	}

	async getById(id: string) {
		const { data } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${id}`),
			method: "GET",
		});

		return data;
	}

	async create(data: ICategoryInput, storeId: string) {
		const { data: createdCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${storeId}`),
			method: "POST",
			data,
		});

		return createdCategory;
	}

	async update(id: string, data: ICategoryInput) {
		const { data: updatedCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${id}`),
			method: "PUT",
			data,
		});

		return updatedCategory;
	}

	async delete(id: string) {
		const { data } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${id}`),
			method: "DELETE",
		});

		return data;
	}
}

export const categoryService = new CategoryService();

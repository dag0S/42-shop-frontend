import { axiosWithAuth } from "../api/api.interceptor";
import { API_URL } from "../config/api.config";
import type { IReview, IReviewInput } from "../types/review.interface";

class ReviewService {
	async getByStoreId(storeId: string) {
		const { data } = await axiosWithAuth<IReview[]>({
			url: API_URL.reviews(`/by-storeId/${storeId}`),
			method: "GET",
		});

		return data;
	}

	async create(data: IReviewInput, storeId: string, productId: string) {
		const { data: createdReview } = await axiosWithAuth<IReview>({
			url: API_URL.reviews(`/${storeId}/${productId}`),
			method: "POST",
			data,
		});

		return createdReview;
	}

	async delete(id: string) {
		const { data } = await axiosWithAuth<IReview>({
			url: API_URL.reviews(`/${id}`),
			method: "DELETE",
		});

		return data;
	}
}

export const reviewService = new ReviewService();

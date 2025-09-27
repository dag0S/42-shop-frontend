import { axiosClassic } from "../api/api.interceptor";
import { API_URL } from "../config/api.config";
import type { IAuthForm, IAuthResponse } from "../types/auth.interface";
import { removeFromStorage, saveTokenStorage } from "./auth-token.service";

class AuthService {
	async main(type: "login" | "register", data: IAuthForm) {
		const response = await axiosClassic<IAuthResponse>({
			url: API_URL.auth(`/${type}`),
			method: "POST",
			data,
		});

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken);
		}

		return response;
	}

	async getNewTokens() {
		const response = await axiosClassic<IAuthResponse>({
			url: API_URL.auth("/refresh"),
			method: "POST",
		});

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken);
		}

		return response;
	}

	async logout() {
		const response = await axiosClassic({
			url: API_URL.auth("/logout"),
			method: "POST",
		});

		if (response.data) {
			removeFromStorage();
		}

		return response;
	}
}

export const authService = new AuthService();

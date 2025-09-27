export const APP_URL = process.env.APP_URL as string;

export const PUBLIC_URL = {
	root: (url = "") => `${url ? url : ""}`,
	home: () => PUBLIC_URL.root("/"),
	auth: () => PUBLIC_URL.root("/auth"),
	explorer: (query = "") => PUBLIC_URL.root(`/explorer${query}`),
	product: (id = "") => PUBLIC_URL.root(`/product/${id}`),
	category: (id = "") => PUBLIC_URL.root(`/category/${id}`),
};

export const DASHBOARD_URL = {
	root: (url = "") => `/dashboard${url ? url : ""}`,
	home: () => DASHBOARD_URL.root("/"),
	favorites: () => DASHBOARD_URL.root("/favorites"),
};

export const STORE_URL = {};

import type { ICategory } from "./category.interface";
import type { IColor } from "./color.interface";
import type { IReview } from "./review.interface";
import type { IStore } from "./store.interface";

export interface IProduct {
	id: string;
	title: string;
	description: string;
	price: number;
	images: string[];
	category: ICategory;
	reviews: IReview[];
	color: IColor;
	store: IStore;
	storeId: string;
}

export interface IProductInput
	extends Omit<IProduct, "id" | "reviews" | "store" | "category" | "color"> {
	categoryId: string;
	colorId: string;
}

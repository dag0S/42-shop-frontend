import type { IProduct } from "@/src/shared/types/product.interface";

export interface Props {
	title: string;
	description?: string;
	linkTitle?: string;
	link?: string;
	products: IProduct[];
}

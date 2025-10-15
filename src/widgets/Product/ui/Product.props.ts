import type { IProduct } from "@/src/shared/types/product.interface";

export interface Props {
	initialProduct: IProduct;
	similarProducts: IProduct[];
	id?: string;
}

import type { ICategory } from "@/src/shared/types/category.interface";
import type { IColor } from "@/src/shared/types/color.interface";
import type { IProduct } from "@/src/shared/types/product.interface";

export interface Props {
	product?: IProduct;
	categories: ICategory[];
	colors: IColor[];
}

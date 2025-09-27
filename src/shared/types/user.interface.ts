import type { IOrder } from "./order.interface";
import type { IProduct } from "./product.interface";
import type { IStore } from "./store.interface";

export interface IUser {
	id: string;
	name: string;
	email: string;
	picture: string;
	favorites: IProduct[];
	orders: IOrder[];
	stores: IStore[];
}

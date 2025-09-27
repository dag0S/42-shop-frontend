export interface IColor {
	id: string;
	createAt: string;
	name: string;
	value: string;
	storeId: string;
}

export interface IColorInput extends Pick<IColor, "name" | "value"> {}

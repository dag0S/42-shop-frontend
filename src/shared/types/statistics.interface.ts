export interface IMainStatistics {
	id: number;
	name: string;
	value: string;
}

export interface IMonthlySales {
	date: string;
	value: number;
}

export interface ILastUsers {
	id: string;
	name: string;
	email: string;
	picture: string;
	total: number;
}

export interface IMiddleStatistics {
	monthlySales: IMonthlySales[];
	lastUsers: ILastUsers[];
}

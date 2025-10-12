import type { FC } from "react";

import { Hero } from "./Hero/Hero";
import { Props } from "./Home.props";
import { Catalog } from "../../Catalog/ui/Catalog";
import { PUBLIC_URL } from "@/src/shared/config/url.config";

export const Home: FC<Props> = ({ products }) => {
	return (
		<>
			<Hero />
			<Catalog
				products={products}
				title="Хиты продаж"
				description="Самые популярные товары нашего магазина"
				link={PUBLIC_URL.explorer()}
				linkTitle="Узнать больше"
			/>
		</>
	);
};

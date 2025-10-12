import type { FC } from "react";

import { Hero } from "./Hero/Hero";
import { Props } from "./Home.props";

export const Home: FC<Props> = ({ products }) => {
	return (
		<>
			<Hero />
		</>
	);
};

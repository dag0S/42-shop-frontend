import type { FC } from "react";

export const Footer: FC = () => {
	return (
		<footer className="border-t mt-16">
			<div className="mx-aut py-5 text-center">
				42-brothers.shop &copy; {new Date().getFullYear()} Все права защищены
			</div>
		</footer>
	);
};

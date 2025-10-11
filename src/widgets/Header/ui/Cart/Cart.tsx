import type { FC } from "react";

import {
	Button,
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/src/shared/shadcn/ui";
import { Heading } from "@/src/shared/ui";

export const Cart: FC = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost">Корзина</Button>
			</SheetTrigger>
			<SheetContent>
				<Heading title="Корзина товаров" className="text-xl" />
			</SheetContent>
		</Sheet>
	);
};

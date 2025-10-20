"use client";

import type { FC } from "react";
import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
	Button,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/src/shared/shadcn/ui";
import { ThemeSwitcher } from "@/src/features/ThemeSwitcher";
import { Cart } from "../Cart/Cart";
import {
	DASHBOARD_URL,
	PUBLIC_URL,
	STORE_URL,
} from "@/src/shared/config/url.config";
import { useProfile } from "@/src/shared/hooks";
import { CreateStoreModal, Loader, SearchInput } from "@/src/shared/ui";

export const MobileMenu: FC = () => {
	const { user, isLoading } = useProfile();

	return (
		<div className="block lg:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon">
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Меню</SheetTitle>
					</SheetHeader>
					<div className="px-4">
						<div className="flex items-center gap-2 mb-4">
							<SearchInput className="w-full" />
							<ThemeSwitcher />
						</div>
						<div className="flex flex-col items-center gap-2 w-full">
							<Cart />
							<Link href={PUBLIC_URL.explorer()}>
								<Button variant="ghost">Каталог</Button>
							</Link>
							{isLoading ? (
								<Loader size="sm" />
							) : user ? (
								<>
									<Link href={DASHBOARD_URL.favorites()}>
										<Button variant="ghost">Избранное</Button>
									</Link>
									{user.stores.length ? (
										<Link href={STORE_URL.home(user.stores[0].id)}>
											<Button variant="ghost">Мои магазины</Button>
										</Link>
									) : (
										<CreateStoreModal>
											<Button variant="ghost">Создать магазин</Button>
										</CreateStoreModal>
									)}
									<Link href={DASHBOARD_URL.home()}>
										<Image
											src={user.picture}
											alt={user.name}
											width={42}
											height={42}
											className="rounded-full min-w-[42px] min-h-[42px]"
										/>
									</Link>
								</>
							) : (
								<Link href={PUBLIC_URL.auth()}>
									<Button>
										<LogIn className="size-4 mr-2" />
										Войти
									</Button>
								</Link>
							)}
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

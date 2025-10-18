"use client";

import Image from "next/image";
import { LogIn } from "lucide-react";
import type { FC } from "react";
import Link from "next/link";

import { useProfile } from "@/src/shared/hooks";
import { Cart } from "../Cart/Cart";
import {
	DASHBOARD_URL,
	PUBLIC_URL,
	STORE_URL,
} from "@/src/shared/config/url.config";
import { Button } from "@/src/shared/shadcn/ui";
import { CreateStoreModal, Loader } from "@/src/shared/ui";
import { ThemeSwitcher } from "@/src/features/ThemeSwitcher";

export const Menu: FC = () => {
	const { user, isLoading } = useProfile();

	return (
		<div className="hidden items-center gap-x-2 ml-auto lg:flex">
			<ThemeSwitcher />
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
	);
};

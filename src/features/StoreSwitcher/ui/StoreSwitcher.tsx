"use client";

import { useState, type FC } from "react";
import { useRouter } from "next/navigation";
import { ChevronsUpDown, Plus, StoreIcon } from "lucide-react";

import { Props } from "./StoreSwitcher.props";
import { STORE_URL } from "@/src/shared/config/url.config";
import {
	Button,
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/shared/shadcn/ui";
import { CreateStoreModal } from "@/src/shared/ui";

export const StoreSwitcher: FC<Props> = ({ items }) => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const onStoreSelect = (storeId: string) => {
		setIsOpen(false);
		router.push(STORE_URL.home(storeId));
	};

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={isOpen}
					aria-label="Выберите магазин"
				>
					<StoreIcon className="mr-2 size-4" />
					<div>Текущий магазин</div>
					<ChevronsUpDown className="ml-auto size-4 shrink-0" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-52 p-0">
				<Command>
					<CommandList>
						<CommandInput placeholder="Найти магазин..." />
						<CommandEmpty>Ничего не найдено</CommandEmpty>
						<CommandGroup heading="Магазины">
							{items.map((store) => (
								<CommandItem
									key={store.id}
									onSelect={() => onStoreSelect(store.id)}
									className="text-sm"
								>
									<StoreIcon className="mr-2 size-4" />
									<div className="line-clamp-1">{store.title}</div>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
					<CommandSeparator />
					<CommandGroup>
						<CreateStoreModal>
							<CommandItem>
								<Plus className="mr-2 size-4" />
								<div>Создать магазин</div>
							</CommandItem>
						</CreateStoreModal>
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

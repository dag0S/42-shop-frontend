"use client";

import { useState, type FC, type ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useCreateStore } from "../hooks/use-create-store";
import type { IStoreCreate } from "../types/store.interface";
import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from "../shadcn/ui";

interface Props {
	children: ReactNode;
}

export const CreateStoreModal: FC<Props> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const { createStore, isLoadingCreate } = useCreateStore();

	const form = useForm<IStoreCreate>({
		mode: "onChange",
		defaultValues: {
			title: "",
		},
	});

	const onSubmit: SubmitHandler<IStoreCreate> = (data) => {
		createStore(data);
		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger className="w-full">{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Создание магазина</DialogTitle>
					<DialogDescription>
						Для Создание магазина необходимо указать название
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="title"
							rules={{
								required: "Название обязательный",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название магазина</FormLabel>
									<FormControl>
										<Input
											placeholder="Название магазина"
											disabled={isLoadingCreate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-end">
							<Button disabled={isLoadingCreate}>Создать</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

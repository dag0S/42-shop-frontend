"use client";

import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Trash } from "lucide-react";

import type { IStoreEdit } from "@/src/shared/types/store.interface";
import { ConfirmModal, Heading } from "@/src/shared/ui";
import { useDeleteStore, useUpdateStore } from "@/src/shared/hooks";
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Textarea,
} from "@/src/shared/shadcn/ui";

export const Settings: FC = () => {
	const { isLoadingUpdate, store, updateStore } = useUpdateStore();
	const { deleteStore, isLoadingDelete } = useDeleteStore();

	const form = useForm<IStoreEdit>({
		mode: "onChange",
		values: {
			title: store?.title || "",
			description: store?.description || "",
		},
	});

	const onSubmit: SubmitHandler<IStoreEdit> = (data) => {
		updateStore(data);
	};

	return (
		<div className="p-6">
			<div className="flex items-center justify-between">
				<Heading
					title="Настройки"
					description="Управление настройками магазина"
				/>
				<ConfirmModal handleClick={() => deleteStore()}>
					<Button size="icon" variant="destructive" disabled={isLoadingDelete}>
						<Trash className="size-4" />
					</Button>
				</ConfirmModal>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 h-full"
				>
					<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
						<FormField
							control={form.control}
							name="title"
							rules={{
								required: "Название обязательный",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название</FormLabel>
									<FormControl>
										<Input
											placeholder="Название магазина"
											disabled={isLoadingUpdate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Описание</FormLabel>
								<FormControl>
									<Textarea
										className="min-h-[100px] max-h-[250px]"
										placeholder="Описание магазина"
										disabled={isLoadingUpdate}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button disabled={isLoadingUpdate}>Сохранить</Button>
				</form>
			</Form>
		</div>
	);
};

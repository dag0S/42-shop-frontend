"use client";

import type { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Trash } from "lucide-react";

import type { Props } from "./ColorForm.props";
import {
	useCreateColor,
	useDeleteColor,
	useUpdateColor,
} from "@/src/shared/hooks";
import { ConfirmModal, Heading } from "@/src/shared/ui";
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from "@/src/shared/shadcn/ui";
import type { IColorInput } from "@/src/shared/types/color.interface";

export const ColorForm: FC<Props> = ({ color }) => {
	const { createColor, isLoadingCreate } = useCreateColor();
	const { updateColor, isLoadingUpdate } = useUpdateColor();
	const { deleteColor, isLoadingDelete } = useDeleteColor();

	const title = color ? "Изменить данные" : "Создать цвет";
	const description = color
		? "Изменить данные о цвете"
		: "Добавить новый цвет в магазин";
	const action = color ? "Сохранить" : "Создать";

	const form = useForm<IColorInput>({
		mode: "onChange",
		values: {
			name: color?.name || "",
			value: color?.value || "",
		},
	});

	const onSubmit: SubmitHandler<IColorInput> = (data) => {
		if (color) {
			updateColor(data);
		} else {
			createColor(data);
		}
	};

	return (
		<div className="p-6">
			<div className="flex items-center justify-between">
				<Heading title={title} description={description} />
				{color && (
					<ConfirmModal handleClick={() => deleteColor()}>
						<Button
							variant="destructive"
							size="icon"
							disabled={isLoadingDelete}
						>
							<Trash className="size-4" />
						</Button>
					</ConfirmModal>
				)}
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
						<FormField
							control={form.control}
							name="name"
							rules={{
								required: "Название обязательное",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название</FormLabel>
									<FormControl>
										<Input
											placeholder="Название цвета"
											disabled={isLoadingCreate || isLoadingUpdate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="value"
							rules={{
								required: "Значение обязательное",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Значение</FormLabel>
									<FormControl>
										<Input
											placeholder="Значение цвета"
											disabled={isLoadingCreate || isLoadingUpdate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button disabled={isLoadingCreate || isLoadingUpdate}>
						{action}
					</Button>
				</form>
			</Form>
		</div>
	);
};

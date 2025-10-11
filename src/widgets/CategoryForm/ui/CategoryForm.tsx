"use client";

import type { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Trash } from "lucide-react";

import type { Props } from "./CategoryForm.props";
import {
	useCreateCategory,
	useDeleteCategory,
	useUpdateCategory,
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
import type { ICategoryInput } from "@/src/shared/types/category.interface";

export const CategoryForm: FC<Props> = ({ category }) => {
	const { createCategory, isLoadingCreate } = useCreateCategory();
	const { updateCategory, isLoadingUpdate } = useUpdateCategory();
	const { deleteCategory, isLoadingDelete } = useDeleteCategory();

	const title = category ? "Изменить данные" : "Создать категорию";
	const description = category
		? "Изменить данные о категории"
		: "Добавить новую категорию в магазин";
	const action = category ? "Сохранить" : "Создать";

	const form = useForm<ICategoryInput>({
		mode: "onChange",
		values: {
			title: category?.title || "",
			description: category?.description || "",
		},
	});

	const onSubmit: SubmitHandler<ICategoryInput> = (data) => {
		if (category) {
			updateCategory(data);
		} else {
			createCategory(data);
		}
	};

	return (
		<div className="p-6">
			<div className="flex items-center justify-between">
				<Heading title={title} description={description} />
				{category && (
					<ConfirmModal handleClick={() => deleteCategory()}>
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
							name="title"
							rules={{
								required: "Название обязательное",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название</FormLabel>
									<FormControl>
										<Input
											placeholder="Название категории"
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
							name="description"
							rules={{
								required: "Описание обязательное",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Описание</FormLabel>
									<FormControl>
										<Input
											placeholder="Описание категории"
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

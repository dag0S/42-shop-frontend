"use client";

import type { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Trash } from "lucide-react";

import type { Props } from "./ProductForm.props";
import type { IProductInput } from "@/src/shared/types/product.interface";
import {
	useCreateProduct,
	useDeleteProduct,
	useUpdateProduct,
} from "@/src/shared/hooks";
import { ConfirmModal, Heading, ImageUpload } from "@/src/shared/ui";
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Textarea,
} from "@/src/shared/shadcn/ui";

export const ProductForm: FC<Props> = ({ categories, colors, product }) => {
	const { createProduct, isLoadingCreate } = useCreateProduct();
	const { updateProduct, isLoadingUpdate } = useUpdateProduct();
	const { deleteProduct, isLoadingDelete } = useDeleteProduct();

	const title = product ? "Изменить данные" : "Создать товар";
	const description = product
		? "Изменить данные о товаре"
		: "Добавить новый товар в магазин";
	const action = product ? "Сохранить" : "Создать";

	const form = useForm<IProductInput>({
		mode: "onChange",
		values: {
			title: product?.title || "",
			description: product?.description || "",
			images: product?.images || [],
			price: product?.price || 0,
			categoryId: product?.category.id || "",
			colorId: product?.color.id || "",
		},
	});

	const onSubmit: SubmitHandler<IProductInput> = (data) => {
		data.price = +data.price;

		if (product) {
			updateProduct(data);
		} else {
			createProduct(data);
		}
	};

	return (
		<div className="p-6">
			<div className="flex items-center justify-between">
				<Heading title={title} description={description} />
				{product && (
					<ConfirmModal handleClick={() => deleteProduct()}>
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
					<FormField
						control={form.control}
						name="images"
						rules={{
							required: "Загрузите хотя бы одну картинку",
						}}
						render={({ field }) => (
							<FormItem className="mt-4">
								<FormLabel>Картинки</FormLabel>
								<FormControl>
									<ImageUpload
										isDisable={isLoadingCreate || isLoadingUpdate}
										onChange={field.onChange}
										value={field.value}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
											placeholder="Название товара"
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
							name="price"
							rules={{
								required: "Цена обязательна",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Цена</FormLabel>
									<FormControl>
										<Input
											placeholder="Цена товара"
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
							name="categoryId"
							rules={{
								required: "Категория обязательна",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Категория</FormLabel>
									<Select
										disabled={isLoadingCreate || isLoadingUpdate}
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Категория товара" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup>
												{categories.map((category) => (
													<SelectItem value={category.id} key={category.id}>
														{category.title}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
						<FormField
							control={form.control}
							name="colorId"
							rules={{
								required: "Цвет обязательный",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Цвет</FormLabel>
									<Select
										disabled={isLoadingCreate || isLoadingUpdate}
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Цвет товара" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup>
												{colors.map((color) => (
													<SelectItem value={color.id} key={color.id}>
														{color.name}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="my-4">
						<FormField
							control={form.control}
							name="description"
							rules={{
								required: "Описание обязательно",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Описание</FormLabel>
									<FormControl>
										<Textarea
											className="min-h-[100px] max-h-[250px]"
											placeholder="Описание товара"
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

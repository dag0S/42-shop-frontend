"use client";

import { useState, type FC, type ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";

import type { IReviewInput } from "../types/review.interface";
import { useCreateReview } from "../hooks/reviews/use-create-review";
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
	Textarea,
} from "../shadcn/ui";

interface Props {
	storeId: string;
	children: ReactNode;
}

export const ReviewModal: FC<Props> = ({ storeId, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const form = useForm<IReviewInput>({
		mode: "onChange",
	});

	const { createReview, isLoadingCreate } = useCreateReview(storeId);

	const onSubmit: SubmitHandler<IReviewInput> = (data) => {
		form.reset();
		createReview(data);
		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Создание отзыва</DialogTitle>
					<DialogDescription>
						Для создание отзыва необходимо указать рейтинг и текст.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="rating"
							rules={{
								required: "Рейтинг обязателен",
							}}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Rating
											onClick={field.onChange}
											initialValue={field.value}
											SVGstyle={{
												display: "inline-block",
											}}
											size={20}
											transition
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="text"
							rules={{
								required: "Текст обязателен",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Текст</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											placeholder="Текст отзыва"
											disabled={isLoadingCreate}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-end">
							<Button disabled={isLoadingCreate}>Добавить</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

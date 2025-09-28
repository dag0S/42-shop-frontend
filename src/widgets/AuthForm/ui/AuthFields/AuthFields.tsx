import type { FC } from "react";

import type { Props } from "./AuthFields.props";
import {
	FormControl,
	FormField,
	FormItem,
	Input,
} from "@/src/shared/shadcn/ui";
import { validEmail } from "@/src/shared/regex";

export const AuthFields: FC<Props> = ({ form, isPending, isReg = false }) => {
	return (
		<>
			{isReg && (
				<FormField
					control={form.control}
					name="name"
					rules={{
						required: "Имя обязательно",
					}}
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Имя" disabled={isPending} {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
			)}
			<FormField
				control={form.control}
				name="email"
				rules={{
					required: "Почта обязательна",
					pattern: {
						value: validEmail,
						message: "Введите валидную почту",
					},
				}}
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
								placeholder="Почта"
								type="email"
								disabled={isPending}
								{...field}
							/>
						</FormControl>
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="password"
				rules={{
					required: "Пароль обязательный",
					minLength: { value: 6, message: "Минимум 6 символов" },
				}}
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
								placeholder="Пароль"
								type="password"
								disabled={isPending}
								{...field}
							/>
						</FormControl>
					</FormItem>
				)}
			/>
		</>
	);
};

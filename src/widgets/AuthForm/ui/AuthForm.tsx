"use client";

import { useState, type FC } from "react";
import Image from "next/image";

import { useAuthForm } from "@/src/shared/hooks";
import type { Props } from "./AuthForm.props";
import { cn } from "@/src/shared/lib/utils";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Form,
} from "@/src/shared/shadcn/ui";
import { AuthFields } from "./AuthFields/AuthFields";

export const AuthForm: FC<Props> = ({ className }) => {
	const [isReg, setIsReg] = useState(false);
	const { form, isPending, onSubmit } = useAuthForm(isReg);

	return (
		<div className={cn(className, "")}>
			<div className="">
				<Image
					src="/images/42.jpg"
					alt="42 brothers"
					width={100}
					height={100}
				/>
			</div>
			<div className="">
				<Card className="">
					<CardHeader className="">
						<CardTitle>
							{isReg ? "Создать аккаунт" : "Войти в аккаунт"}
						</CardTitle>
						<CardDescription>
							Войдите или создайте учетную запись, чтобы оформлять покупки!
						</CardDescription>
					</CardHeader>
					<CardContent className="">
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<AuthFields form={form} isPending={isPending} isReg={isReg} />
								<Button disabled={isPending}>Продолжить</Button>
							</form>
						</Form>
						{/* Socials */}
					</CardContent>
					<CardFooter className="">
						{isReg ? "Уже есть аккаунт?" : "Ещё нет аккаунта?"}
						<button onClick={() => setIsReg((prev) => !prev)}>
							{isReg ? "Войти" : "Создать"}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

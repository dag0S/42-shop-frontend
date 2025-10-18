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
import { Social } from "./Social/Social";
import { Logo } from "@/src/shared/ui";

export const AuthForm: FC<Props> = ({ className }) => {
	const [isReg, setIsReg] = useState(false);
	const { form, isPending, onSubmit } = useAuthForm(isReg);

	return (
		<div
			className={cn(className, "min-h-screen grid grid-cols-1 lg:grid-cols-2")}
		>
			<div className="h-full bg-[url(/images/auth-bg.jpg)] bg-cover bg-center bg-no-repeat hidden lg:flex justify-center items-start">
				<Logo className="mt-5" />
			</div>
			<div className="h-full flex flex-col items-center justify-center">
				<Card className="border-none p-6 flex flex-col items-center justify-center w-[380px] gap-0">
					<CardHeader className="text-center pb-5 w-full">
						<CardTitle className="pb-1 text-3xl font-bold">
							{isReg ? "Создать аккаунт" : "Войти в аккаунт"}
						</CardTitle>
						<CardDescription>
							Войдите или создайте учетную запись, чтобы оформлять покупки!
						</CardDescription>
					</CardHeader>
					<CardContent className="p-0 w-full">
						<Form {...form}>
							<form
								className="space-y-5"
								onSubmit={form.handleSubmit(onSubmit)}
							>
								<AuthFields form={form} isPending={isPending} isReg={isReg} />
								<Button className="w-full" disabled={isPending}>
									Продолжить
								</Button>
							</form>
						</Form>
						<Social />
					</CardContent>
					<CardFooter className="p-0 mt-4 text-sm text-muted-foreground">
						{isReg ? "Уже есть аккаунт?" : "Ещё нет аккаунта?"}
						<button
							className="ml-1 text-sky-600 cursor-pointer"
							onClick={() => setIsReg((prev) => !prev)}
						>
							{isReg ? "Войти" : "Создать"}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

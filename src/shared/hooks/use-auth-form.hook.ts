import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import type { IAuthForm } from "../types/auth.interface";
import { authService } from "../services/auth.service";
import { PUBLIC_URL } from "../config/url.config";

export const useAuthForm = (isReg: boolean) => {
	const router = useRouter();

	const form = useForm<IAuthForm>({
		mode: "onChange",
	});

	const { mutate, isPending } = useMutation({
		mutationKey: ["auth user"],
		mutationFn: (data: IAuthForm) =>
			authService.main(isReg ? "register" : "login", data),
		onSuccess() {
			form.reset();
			toast.success("Успешная авторизация");
			router.replace(PUBLIC_URL.home());
		},
		onError(error) {
			if (error.message) {
				toast.error(error.message);
			} else {
				toast.error("Ошибка при авторизации");
			}
		},
	});

	const onSubmit: SubmitHandler<IAuthForm> = (data) => {
		mutate(data);
	};

	return { onSubmit, form, isPending };
};

import type { Metadata } from "next";
import type { FC } from "react";

import { AuthForm } from "@/src/widgets/AuthForm";

export const metadata: Metadata = {
	title: "Авторизация",
};

const AuthPage: FC = () => {
	return (
		<div>
			<AuthForm />
		</div>
	);
};

export default AuthPage;

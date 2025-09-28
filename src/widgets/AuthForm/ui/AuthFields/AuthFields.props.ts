import { UseFormReturn } from "react-hook-form";

import type { IAuthForm } from "@/src/shared/types/auth.interface";

export interface Props {
	form: UseFormReturn<IAuthForm, any, IAuthForm>;
	isPending: boolean;
	isReg?: boolean;
}

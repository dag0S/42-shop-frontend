"use client";

import type { FC } from "react";
import { useUpload } from "./use-upload";
import Image from "next/image";
import { ImagePlus } from "lucide-react";

import { Button } from "../../shadcn/ui";
import { cn } from "../../lib/utils";

interface Props {
	isDisable: boolean;
	onChange: (value: string[]) => void;
	value: string[];
}

export const ImageUpload: FC<Props> = ({ isDisable, onChange, value }) => {
	const { fileInputRef, handleButtonClick, handleFileChange, isUploading } =
		useUpload(onChange);

	return (
		<div>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-5">
				{value.map((url) => (
					<div
						key={url}
						className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
					>
						<Image src={url} alt="Картинка" fill className="object-cover" />
					</div>
				))}
			</div>
			<Button
				type="button"
				disabled={isDisable || isUploading}
				variant="secondary"
				onClick={handleButtonClick}
				className={cn({
					"mt-4": value.length,
				})}
			>
				<ImagePlus className="size-4 mr-2" />
				Загрузить картинки
			</Button>
			<input
				type="file"
				multiple
				ref={fileInputRef}
				onChange={handleFileChange}
				disabled={isDisable}
				className="hidden"
			/>
		</div>
	);
};

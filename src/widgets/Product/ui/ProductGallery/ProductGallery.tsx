import { useState, type FC } from "react";
import Image from "next/image";

import type { Props } from "./ProductGallery.props";
import { cn } from "@/src/shared/lib/utils";

export const ProductGallery: FC<Props> = ({ product }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div>
			<Image
				src={product.images[currentIndex]}
				alt={product.title}
				width={500}
				height={500}
				className="rounded-lg"
			/>
			<div className="flex mt-6 gap-6">
				{product.images.map((image, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={cn(
							"duration-300 border rounded-lg overflow-hidden",
							index === currentIndex ? "border-black" : "border-transparent",
						)}
					>
						<Image src={image} alt={product.title} width={100} height={100} />
					</button>
				))}
			</div>
		</div>
	);
};

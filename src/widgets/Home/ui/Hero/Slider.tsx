"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef, type FC } from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/src/shared/shadcn/ui";

export const Slider: FC = () => {
	const plugin = useRef(Autoplay({ delay: 4000 }));

	return (
		<Carousel
			opts={{
				loop: true,
			}}
			plugins={[plugin.current]}
			className="w-full rounded-lg overflow-hidden"
		>
			<div className="w-full h-full absolute bg-black/60 z-10" />
			<CarouselContent className="h-[200px] md:h-[500px] ml-0">
				<CarouselItem className="h-full pl-0">
					<div className="h-full bg-[url(/images/slide-1.webp)] bg-center bg-cover" />
				</CarouselItem>
				<CarouselItem className="h-full pl-0">
					<div className="h-full bg-[url(/images/slide-2.webp)] bg-center bg-cover" />
				</CarouselItem>
				<CarouselItem className="h-full pl-0">
					<div className="h-full bg-[url(/images/slide-3.webp)] bg-center bg-cover" />
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious className="left-4 z-30" />
			<CarouselNext className="right-4 z-30" />
		</Carousel>
	);
};

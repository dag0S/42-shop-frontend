import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react";
import Link from "next/link";

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/src/shared/shadcn/ui";
import { STORE_URL } from "@/src/shared/config/url.config";
import type { IColor } from "@/src/shared/types/color.interface";

export const ColorColumns: ColumnDef<IColor>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Название
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "value",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Значение
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="flex items-center gap-x-3">
				{row.original.value}
				<div
					className="size-5 rounded-full border border-foreground"
					style={{
						backgroundColor: row.original.value,
					}}
				/>
			</div>
		),
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Дата создания
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "actions",
		header: "Действия",
		cell: ({ row }) => (
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button variant="ghost" className="size-8 p-0">
						<MoreHorizontal className="size-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Действия</DropdownMenuLabel>
					<Link
						href={STORE_URL.colorEdit(row.original.storeId, row.original.id)}
					>
						<DropdownMenuItem>
							<Pencil className="size-4 mr-2" />
							Изменить
						</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>
		),
	},
];

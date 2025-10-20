import { ColumnDef } from "@tanstack/react-table";
import {
	ArrowUpDown,
	ExternalLink,
	MoreHorizontal,
	Pencil,
} from "lucide-react";
import Link from "next/link";

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/src/shared/shadcn/ui";
import { PUBLIC_URL, STORE_URL } from "@/src/shared/config/url.config";

export interface ICategoryColumn {
	id: string;
	createdAt: string;
	title: string;
	storeId: string;
}

export const categoryColumns: ColumnDef<ICategoryColumn>[] = [
	{
		accessorKey: "title",
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
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="size-8 p-0">
						<MoreHorizontal className="size-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Действия</DropdownMenuLabel>
					<Link href={PUBLIC_URL.category(row.original.id)}>
						<DropdownMenuItem>
							<ExternalLink className="size-4 mr-2" />
							Страница с категорией
						</DropdownMenuItem>
					</Link>
					<Link
						href={STORE_URL.categoryEdit(row.original.storeId, row.original.id)}
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

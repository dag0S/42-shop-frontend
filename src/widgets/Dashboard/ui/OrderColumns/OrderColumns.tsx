"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/src/shared/shadcn/ui";

export interface IOrderColumn {
	createdAt: string;
	status: string;
	total: string;
}

export const orderColumns: ColumnDef<IOrderColumn>[] = [
	{
		accessorKey: "createdAt",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Дата оплаты
					<ArrowUpDown className="size-4 ml-2" />
				</Button>
			);
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Статус
					<ArrowUpDown className="size-4 ml-2" />
				</Button>
			);
		},
	},
	{
		accessorKey: "total",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Сумма
					<ArrowUpDown className="size-4 ml-2" />
				</Button>
			);
		},
	},
];

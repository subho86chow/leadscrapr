"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Globe, MapPin, Phone, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { twMerge } from "tailwind-merge"
import Link from "next/link"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type ResData = {
  id: string
  name: string
  reviews: number
  address: string
  actions: {
    website: string | null
    phone: string | null
    map: string | null
    info: string
  }
}

export const columns: ColumnDef<ResData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left font-semibold text-slate-900 dark:text-white select-none">Name</div>,
    cell: ({ row }) => (
      <div className="flex flex-col">
        <div className="capitalize select-none font-medium">{row.getValue("name")}</div>
        <p className="font-light select-none">Cake Shop </p>
      </div>
    ),
  },
  {
    accessorKey: "reviews",
    header: () => <div className="text-left font-semibold text-slate-900 dark:text-white select-none">Total Reviews</div>,
    cell: ({ row }) => {
      const review_number: number = row.getValue("reviews")
      let review_style = ""
      if (review_number <= 10) {
        review_style = "border-red-500 text-red-500"
      } else if (review_number > 10 && review_number <= 30) {
        review_style = "border-orange-500 text-orange-500"
      } else if (review_number > 30 && review_number <= 60) {
        review_style = "border-lime-500 text-lime-500"
      } else {
        review_style = "border-green-500 text-green-500"
      }

      return (    
        <div className={twMerge("lowercase rounded-full border-2 w-10 flex justify-center select-none", review_style)}>
          <span className="text-center font-semibold">{review_number}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "address",
    header: () => <div className="text-left font-semibold text-slate-900 dark:text-white select-none">Address</div>,
    cell: ({ row }) => {
      return <div className="text-left select-none">{row.getValue("address")}</div>
    },
  },
  {
    id: "actions",
    header: () => <div className="text-left font-semibold text-slate-900 dark:text-white select-none">Actions</div>,
    enableHiding: true,
    filterFn: (row, id, filterValues) => {
        const actions = row.original.actions
        const reviews = row.getValue("reviews") as number
  
        return filterValues.some((filter: string) => {
          switch (filter) {
            case "no_website":
              return !actions.website
            case "low_reviews":
              return reviews < 20
            default:
              return true
          }
        })
      },
    cell: ({ row }) => {
      const resData = row.original

      return (
        <div className="flex gap-2 select-none">
          {resData.actions.website && (
            <Link href={resData.actions.website} className="bg-blue-300 border-none rounded-full p-1.5">
              <span>
                <Globe className="w-4 h-4 text-blue-700"/>
              </span>
            </Link>
          )}

          {resData.actions.phone && (
            <Link href={`tel:${resData.actions.phone}`} className="bg-green-300 border-none rounded-full p-1.5">
              <span>
                <Phone className="w-4 h-4 text-green-700"/>
              </span>
            </Link>
          )}

          {resData.actions.map && (
            <Link href={resData.actions.map} className="bg-pink-300 border-none rounded-full p-1.5">
              <span>
                <MapPin className="w-4 h-4 text-pink-700"/>
              </span>
            </Link>
          )}

          <Popover>
            <PopoverTrigger className="bg-slate-300 border-none rounded-full p-1.5">
              <span>
                <Info className="w-4 h-4 text-slate-700"/>
              </span>
            </PopoverTrigger>
            <PopoverContent className="select-none">{resData.actions.info}</PopoverContent>
          </Popover>
        </div>
      )
    },
  },
]
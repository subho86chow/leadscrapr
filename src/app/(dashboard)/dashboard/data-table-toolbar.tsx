"use client"

import { Table } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X,Settings2 } from "lucide-react"
import { DataTableFacetedFilter } from "@/app/(dashboard)/dashboard/data-table-facted-toolbar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

// You'll need to define these based on your data structure
const types = [
  { value: "no_website", label: "No Website" },
  { value: "low_reviews", label: "Low Reviews" },
  // Add more categories as needed
]

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search Business"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {table.getColumn("actions") && (
          <DataTableFacetedFilter
            column={table.getColumn("actions")}
            title="Filter"
            options={types}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        {table.getFilteredSelectedRowModel().rows.length > 0 ? (

            <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
                <Button variant="outline" size="sm" className="h-8 border-dashed">
                <Settings2 className="mr-2 size-4" aria-hidden="true" />
                Tools 
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuItem>Lighthouse report</DropdownMenuItem>
            <DropdownMenuItem>AI Analysis</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>

        ) : null}
      </div>
    </div>
  )
}
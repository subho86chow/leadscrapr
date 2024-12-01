import { Button } from "@/components/ui/button"
import { FaRegFaceSadCry,FaRegFaceGrinHearts,FaRegFaceSmile,FaRegFaceFrown } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Link from "next/link";

export function ReviewForm() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline">Feedback</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-1">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-1 items-center gap-4">
            <Textarea
                  placeholder="Your feedback..."
                  className="resize-none col-span-2 h-20 w-100 y-auto"
                />
            </div>
            <div className="flex justify-between items-center gap-4">
            <div className="flex">
              <Link href="" className=" hover:text-green-500 rounded-full p-1">
                <FaRegFaceGrinHearts/>
              </Link>
              <Link href="" className="hover:text-blue-500 rounded-full p-1">
                <FaRegFaceSmile/>
              </Link>
              <Link href="" className="hover:text-yellow-500 rounded-full p-1">
                <FaRegFaceFrown/>
              </Link>
              <Link href="" className="hover:text-red-500 rounded-full p-1">
                <FaRegFaceSadCry />
              </Link>  

            </div>
            <Button size="sm" className="w-20 m-1">Submit</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

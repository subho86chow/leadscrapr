"use client"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
export default function DeleteUser(){ 

  return (
      <Card className="border border-red-300 dark:border-red-900 rounded-lg shadow-none">
        <CardHeader className="">
          <CardTitle className="text-base md:text-xl font-medium p-0 m-0">Delete Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
              <p className="text-xs md:text-medium">Permanently remove your Personal Account and all of its contents from Leadscrapr. This action is not reversible, so please continue with caution.</p>
          </div>
        </CardContent>
        <Separator className="bg-red-300 dark:border-red-900"/>
        <CardFooter className="flex justify-end bg-red-100 dark:border-red-900 dark:bg-red-300 rounded-b-lg px-6 py-3 md:py-2">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                <Button size="default" variant="destructive" type="button">
                    Delete Account
                </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction  className="bg-red-500 hover:bg-red-700/90 dark:bg-red-900/80 dark:hover:bg-red-900/90 text-white">Confirm Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </CardFooter>
      </Card>
  )
}
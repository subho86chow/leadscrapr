"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EllipsisVertical, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge"

export default function EmailForm() {
  const [emails, setEmails] = useState(["subho86chow@gmail.com"]);
  const [newEmail, setNewEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    setIsButtonDisabled(!isValidEmail(newEmail));
  }, [newEmail]);
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAddEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEmail && !emails.includes(newEmail) && isValidEmail(newEmail)) {
      setEmails([...emails, newEmail]);
      setNewEmail("");
      setIsDialogOpen(false);
    }
  };

  const handleDeleteEmail = (emailToDelete: string) => {
    setEmails(emails.filter(email => email !== emailToDelete));
  };

  return (
    <div>
      <Card className="border border-gray-300 dark:border-white/20 rounded-lg shadow-none">
        <CardHeader>
          <CardTitle className="text-base md:text-xl font-medium p-0 m-0">
            Email
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs md:text-medium">
              Enter the email addresses you want to use to log in with
              Leadscrapr. Your primary email will be used for account-related
              notifications.
            </p>
            {emails.map((email, index) => (
              <Card key={index} className="p-4 shadow-none rounded-md flex justify-between items-center">
                <div className="md:flex items-center gap-2">
                  <p className="text-sm md:text-base font-medium sm:pb-2 md:pb-0">{email}</p>
                  {index === 0 && (
                    <>
                      <Badge variant="success" className="rounded-full sm:mr-1"><span className="text-green-700">Primary</span></Badge>
                      <Badge variant="blue" className="rounded-full sm:mr-1"><span className="text-blue-700">Verified</span></Badge>
                    </>
                  )}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <EllipsisVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Button
                        size="sm"
                        type="button"
                        variant="destructive"
                        className="w-full"
                        onClick={() => handleDeleteEmail(email)}
                        disabled={index === 0}
                      >
                        Delete
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Card>
            ))}
            <div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="mt-2">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Another
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] p-0">
                  <DialogHeader className="px-8 pt-4">
                    <DialogTitle className="py-2">Add Email Address</DialogTitle>
                    <DialogDescription>
                    Add a new email address to your account. This email, once verified, can be used to login to your account.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleAddEmail}>
                    <div className="grid gap-1 px-8 pt-2">
                      <div className="flex items-center gap-4">
                        <Label htmlFor="email" className="text-start">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={newEmail}
                          onChange={(e) => setNewEmail(e.target.value)}
                          className="col-span-3"
                          required
                        />
                      </div>
                    </div>
                    <Separator className="bg-gray-300 dark:bg-white/20 mt-3"/>
                    <DialogFooter className="bg-gray-100 dark:bg-gray-900/90 rounded-b-lg px-6 py-2">
                      <Button disabled={isButtonDisabled} type="submit">Add Email</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
        <Separator className="bg-gray-300 dark:bg-white/20" />
        <CardFooter className="flex justify-between bg-gray-100 dark:bg-gray-900/90 rounded-b-lg px-6 py-3">
          <p className="text-xs md:text-sm text-muted-foreground">
            Emails must be verified to be able to login with them or be used as
            primary email.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
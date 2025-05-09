import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { useState } from "react";

export function UserDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Logic to send message
    console.log("Sending message:", message);
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>@johndoe</CardDescription>
            <Badge className="mt-1">Active</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="messages">
            <TabsList>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="info">User Info</TabsTrigger>
            </TabsList>
            <TabsContent value="messages">
              <ScrollArea className="h-[300px] rounded-md border p-4">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Bot</span>
                    <div className="rounded-lg bg-muted p-3">
                      Hello! How can I help you today?
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-muted-foreground">User</span>
                    <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                      I need information about your services.
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Bot</span>
                    <div className="rounded-lg bg-muted p-3">
                      Sure, we offer various services including...
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="info">
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-sm font-medium">User ID:</div>
                  <div className="text-sm">12345678</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-sm font-medium">First Name:</div>
                  <div className="text-sm">John</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-sm font-medium">Last Name:</div>
                  <div className="text-sm">Doe</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-sm font-medium">Username:</div>
                  <div className="text-sm">@johndoe</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-sm font-medium">Language:</div>
                  <div className="text-sm">English</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-sm font-medium">Joined:</div>
                  <div className="text-sm">January 15, 2023</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
              <Button className="w-full">Send Message</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Send Message to User</AlertDialogTitle>
                <AlertDialogDescription>
                  This message will be sent directly to the user via the bot.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="grid gap-4 py-4">
                <textarea
                  className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleSendMessage}>Send</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  );
}
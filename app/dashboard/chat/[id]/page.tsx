import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      {" "}
      <header className="border-b border-border p-4 flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage
            src={`https://picsum.photos/seed/${params.id}/200`}
            alt={params.id}
          />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold">{params.id}</h2>
          <p className="text-sm text-muted-foreground">Online</p>
        </div>
      </header>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          <div className="flex items-start">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage
                src={`https://picsum.photos/seed/${params.id}/200`}
                alt={params.id}
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="bg-secondary p-3 rounded-lg max-w-[70%]">
              <p>Hey there! How's it going?</p>
            </div>
          </div>
          <div className="flex items-start justify-end">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[70%]">
              <p>
                Hi Alice! I'm doing great, thanks for asking. How about you?
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
      <footer className="border-t border-border p-4">
        <form className="flex items-center gap-2">
          <Input placeholder="Type a message..." className="flex-1" />
          <Button type="submit">Send</Button>
        </form>
      </footer>
    </>
  );
}

import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function ChatMenuItem({
  name,
  user_id,
}: {
  name: string;
  user_id: string;
}) {
  return (
    <Link href={`/dashboard/chat/${user_id}`}>
      <Button key={user_id} variant="ghost" className="w-full justify-start">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage
            src={`https://picsum.photos/seed/${name}/200`}
            alt={name}
          />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        {name}
      </Button>
    </Link>
  );
}

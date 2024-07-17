import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
  
  export function AvatarDemo() {
    return (
      <Avatar>
        <AvatarImage src="/avatar.jpeg" alt="Avatar Personal" />
        <AvatarFallback>MA</AvatarFallback>
      </Avatar>
    )
  }
  
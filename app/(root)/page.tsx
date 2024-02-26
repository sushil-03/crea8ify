import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      I am done
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

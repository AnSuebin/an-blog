import Profile from "@/components/common/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Profile />
    </main>
  );
}

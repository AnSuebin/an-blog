import Card from "@/components/common/Card";
import CarouselBox from "@/components/common/CarouselBox";
import Profile from "@/components/common/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-40">
      <Profile />
      <div className="mt-11 w-full">
        <div className="text-xs font-bold mb-3">Featured Posts</div>
        <div className="flex gap-5 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="mt-11 w-full">
        <div className="text-xs font-bold mb-3">You may like</div>
        <div className="px-1">
          <CarouselBox />
        </div>
      </div>
    </main>
  );
}

"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

export default function NotFound() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-[60vh] center flex-col gap-5">
      <Heading className="font-medium" text="404 Not Found" />
      <p className="text-center text-lg text-neutral-900 font-medium">
        The page you are looking for does not exist.
      </p>
      <Button onClick={handleNavigation} className="p-3">
        Go back to Home
      </Button>
    </div>
  );
}

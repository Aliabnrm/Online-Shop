import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { SignInButton } from "@clerk/nextjs";
import { ShoppingCart, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/assets/icons/logo.svg"
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            {APP_NAME}
          </Link>
        </div>
        <div className="space-x-2 flex justify-center ">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
            </Link>
          </Button>
          <Button>
            <User2Icon />
            <SignInButton mode="modal">Sign In</SignInButton>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

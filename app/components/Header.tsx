import { SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  return (
    <div className="m-auto flex justify-between items-center p-6 md:px-20 shadow-sm">
      <h1>Online Shop</h1>

      <div className="flex gap-5">
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button>Sign Up</button>
        </SignUpButton>
      </div>
    </div>
  );
}

export default Header;

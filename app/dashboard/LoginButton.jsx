'use client'
import React from "react";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div>
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="bg-primary text-primary-foreground px-6 py-2 rounded-lg"
      >
        {" "}
        Sign in with Google
      </button>
    </div>
  );
}

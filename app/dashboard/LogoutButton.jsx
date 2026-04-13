"use client";

import { signOut } from "next-auth/react";

import React from "react";

export default function LogoutButton() {
  return (
    <div>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="text-sm text-muted-foreground hover:underline"
      >
        Sign out
      </button>
    </div>
  );
}

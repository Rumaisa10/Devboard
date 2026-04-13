import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import LoginButton from "../dashboard/LoginButton";

import React from 'react'

export default async function Loginpage() {
    const session = await getSession()
    if(session)
    {
        redirect('/dashboard')
    }
  return (
   <main className="flex min-h-screen items-center justify-center">
      <div className="border rounded-lg p-8 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-medium">Welcome to DevBoard</h1>
        <p className="text-muted-foreground text-sm">
          Sign in to manage your tasks
        </p>
        <LoginButton />
      </div>
    </main>
  )
}


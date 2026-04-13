"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
     const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get('password')
    const response = await fetch("api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    response.status === 201 && router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border p-6 rounded-lg w-full max-w-sm"
      >
        <fieldset className="flex flex-col gap-4">
          <legend className="text-xl font-semibold mb-2">Register</legend>

          <div>
            <label className="block mb-1">Name</label>
            <input
              name="name"
              type="text"
              className="border p-2 w-full rounded"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="border p-2 w-full rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="border p-2 w-full rounded"
              placeholder="Enter your email"
              required
            />
          </div>
         
          <button type="submit" className="bg-black text-white p-2 rounded">
            Sign Up
          </button>
        </fieldset>
      </form>
    </main>
  );
}

'use server'
import { getServerSession } from "next-auth";
import Task from "./models/Task";
import { revalidatePath } from "next/cache";
import React from "react";

export async function CreateTask(formData) {
  const session = await getServerSession()

  await Task.create({
    title: formData.title,
    status: formData.status,
    priority: formData.priority,
    userId: session.user.email,
  })
  revalidatePath("/dashboard")
}

export async function DeleteTask(id) {
  await Task.findByIdAndDelete(id);
  revalidatePath('/dashboard/')
}

export async function UpdateTask(id,data) {
   await Task.findByIdAndUpdate(id,data)
   revalidatePath('/dashboard')
}
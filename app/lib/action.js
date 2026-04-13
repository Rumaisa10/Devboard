'use server'
import Task from "./models/Task";
import { revalidatePath } from "next/cache";
import React from "react";

export async function DeleteTask(id) {
  await Task.findByIdAndDelete(id);
  revalidatePath('/dashboard/')
}

export async function UpdateTask(id,data) {
   await Task.findByIdAndUpdate(id,data)
   revalidatePath('/dashboard')
}
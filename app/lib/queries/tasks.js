import Task from "../models/Task";
import { getServerSession } from "next-auth";
import React from 'react'

export default async function getTasks() {
   const session = await getServerSession()
   const tasks = await Task.find({userId:session?.user?.email}).lean()
   return tasks
}

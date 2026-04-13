import Task from "../models/Task";

import React from 'react'

export default async function getTasks() {
   
   const tasks = await Task.find().lean()
   return tasks
}

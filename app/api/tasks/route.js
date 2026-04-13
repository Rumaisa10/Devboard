import db from "@/app/lib/db";
import { NextResponse } from "next/server";
import Task from "@/app/lib/models/Task";
import React from "react";

export  async function POST(request) {
  const data = await request.json();

  const task = Task.create({
    title: data.title,
    status: data.status,
    priority: data.priority,
  });
  return NextResponse.json(task)
}

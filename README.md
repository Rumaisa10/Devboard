# DevBoard

A developer task tracking dashboard built with Next.js 15 and MongoDB.

## Features

- View, add and track tasks with status and priority levels
- Skeleton loading states with React Suspense
- Error boundary with retry functionality
- Automated CI pipeline with GitHub Actions

## Tech Stack

- Next.js 15 (App Router)
- MongoDB + Mongoose
- Tailwind CSS
- shadcn/ui

## Getting Started

1. Clone the repo
   git clone https://github.com/YOUR_USERNAME/devboard.git

2. Install dependencies
   npm install

3. Add environment variables
   Create a .env.local file in the root:
   MONGODB_URI=your_mongodb_connection_string

4. Run the development server
   npm run dev
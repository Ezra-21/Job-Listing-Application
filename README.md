# Job Listing Dashboard

This is a Next.js application for displaying job opportunities in a card-based dashboard. The project uses the App Router, TypeScript, Tailwind CSS, and dynamic server-side rendering for up-to-date job data.

## Features
- **Homepage:** Lists all job postings with company logos, job titles, locations, and category tags.
- **Job Details Page:** Provides complete information for each job, including responsibilities, desired skills, and event info.
- **Custom Avatars:** Each job card shows a unique company logo image.
- **Mobile-Friendly Design:** Crafted with Tailwind CSS to ensure a responsive and modern interface.
- **Data Management:** Job listings are sourced from a local `jobs.json` file, making updates simple.

## Screenshots

### Dashboard

![Dashboard](Screenshoots/Screenshot%202025-08-14%20at%2011.18.46%20at%20night.png)

### Job Description

![Job Description](Screenshoots/Screenshot%202025-08-14%20at%2011.19.06%20at%20night.png
)

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser at `http://localhost:3000` to view the dashboard.

## Customization

- Add or update jobs in `data.ts`.
- Add new avatar images to the `public` folder and update logic in `JobCards.tsx` as needed.

## Technologies Used

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Author
Ezra Leye

# Social Media Profile Page

Welcome to the profile page of our social media website! This Next.js application fetches user data from a local JSON file through a custom API and beautifully displays it on a user's profile page. Users can showcase their cover picture, profile picture, bio, stats, and posts in an elegant and user-friendly layout.

## Getting Started

To get started with this Next.js application, follow these steps:

1. Clone the repository:
   bash
   git clone https://github.com/SindhuraPogarthi/task-for-ttt
   
2. Install dependencies:
   bash
   npm install
   
3. npm run dev
   bash
   Open your browser and navigate to http://localhost:3000 to view the application.
   

## Features

Profile Overview: Display cover picture, profile picture, username, badge, and verification status.

Stats: Showcase the number of followers and following.

Bio and Links: Present a brief bio and any additional links provided by the user.

Engagement Metrics: Highlight stars, likes, views, and hearts received by the user.

Posts: List user's posts with details such as title, content, category, date, read time, and views.

## Technologies Used

Next.js: A React framework for building efficient server-side-rendered web applications.

React: A JavaScript library for building user interfaces.

CSS Modules: Localized styles for each React component.

## Project Structure

.
├── components
│ ├── [Component files]
├── pages
│ ├── index.js
├── public
│ ├── images
├── styles
│ ├── [Style files]
├── api
│ ├── userData.json
├── README.md
├── package.json
└── .gitignore

## API Endpoint

The application fetches user data from the custom API endpoint:

Endpoint: /api/userData
Data Source: api/userData.json

## Data Structure

- userData.json:
- coverPicture: URL of the cover picture.
- profilePicture: URL of the profile picture.
- username: User's username.
- diamondBadge: Boolean indicating if the user has a diamond badge.
- verified: Boolean indicating if the user is verified.
- followers: Number of followers.
- following: Number of users being followed.
- bio: User's bio.
- otherLinks: Array of additional links.
- totalStars: Total stars received.
- totalLikes: Total likes received.
- totalViews: Total views received.
- totalHearts: Total hearts received.
- totalPosts: Total number of posts.
- posts: Array of user's posts with title, content, category, date, read time, and views.

Feel free to explore and customize this Next.js application for your social media website! If you have any questions or feedback, please open an issue or reach out to us.

You can directly go to the website by click on the link below 
https://taskttt.netlify.app/ 

Happy coding! 🚀

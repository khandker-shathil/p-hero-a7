# 👥 KeenKeeper — Keep Your Friendships Alive

A modern friendship management web application built with React/Next.js that helps users maintain meaningful relationships by tracking interactions, reminders, and communication history with friends.

---

## 🌐 Live Demo

- 🔗 **Live Site:** [Add Your Live Link Here]
- 🗂️ **GitHub Repo:** [Add Your GitHub Repository Link Here]

---

## 📌 About the Project

**KeenKeeper** is a responsive web app designed to help users stay connected with friends. It tracks communication frequency, logs interactions (Call, Text, Video), and visualizes friendship activity through a timeline and analytics dashboard.

The goal of this project is to simulate a real-world relationship tracking system with a clean UI and interactive features.

---

## 🚀 Features

### 🧩 Core Features
- Fully responsive UI (mobile, tablet, desktop)
- Dynamic friend cards loaded from JSON data
- Friend details page with full profile view
- Quick interaction system (Call / Text / Video)
- Timeline tracking for all interactions
- Toast notifications on user actions
- Loading spinner while fetching data
- Custom 404 page for invalid routes
- Active navigation highlighting

### 📊 Challenge Features
- 📈 Pie chart analytics using Recharts
- 🔍 Timeline filtering (Call / Text / Video)
- 🧭 Fully structured navigation system
- 📄 Professional README documentation

---

## 🛠️ Tech Stack

- ⚛️ React.js / Next.js
- 🧭 React Router DOM / App Router
- 🎨 Tailwind CSS
- 🧩 DaisyUI / UI Component Library
- 📊 Recharts (Data Visualization)
- 🔔 React Toastify / Sonner (Notifications)
- ☁️ Vercel / Netlify (Deployment)

---

## 📂 Project Structure
src/
│
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── FriendCard
│   ├── LoadingSpinner
│
├── pages/
│   ├── Home
│   ├── FriendDetails
│   ├── Timeline
│   ├── Stats
│   ├── NotFound
│
├── context/
│   ├── ActionContext
│
├── data/
│   ├── friends.json
│
└── App.jsx / App.tsx

---

## 🧑‍🤝‍🧑 Friend Data Structure

## Code

Each friend object follows this format:

```json
{
  "id": 1,
  "name": "John Doe",
  "picture": "https://example.com/photo.jpg",
  "email": "john@example.com",
  "days_since_contact": 12,
  "status": "overdue",
  "tags": ["college", "close friend"],
  "bio": "Met in university. Love hiking together.",
  "goal": 14,
  "next_due_date": "2025-07-20"
}

## 🏠 Pages Overview

## 🏡 Home Page

* Hero banner with title & subtitle
* “Add Friend” button with icon
* Summary cards
* Grid layout of all friends

## 👤 Friend Details Page

* Friend profile card (image, name, email, tags, bio, status)
* Action buttons (Snooze, Archive, Delete)
* Stats cards (Days since contact, Goal, Next due date)
* Relationship goal section
* Quick check-in buttons:
    * 📞 Call
    * 💬 Text
    * 🎥 Video

## 📜 Timeline Page

* Logs all interactions
* Shows date, icon, and title
* Filter by Call / Text / Video

## 📊 Stats Page

* Friendship analytics dashboard
* Pie chart showing interaction distribution

## ❌ 404 Page

* Custom not-found page for invalid routes

## ⚡ Interaction System

When a user clicks:

* 📞 Call
* 💬 Text
* 🎥 Video

## The app will:

* Create a timeline entry
* Save current date
* Add a title like:
    * “Call with Alex Johnson”
* Show a toast notification

## 📱 Responsive Design

Fully optimized for:

* 📱 Mobile devices
* 💻 Tablets
* 🖥️ Desktop screens

## Installation Guide 

git clone https://github.com/your-username/keenkeeper.git
cd keenkeeper
npm install
npm run dev

🚀 Deployment

## This project is deployed using:

* Netlify
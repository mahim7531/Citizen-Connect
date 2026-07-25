# 🚀 CitizenConnect

> **A MERN Stack Smart Civic Issue Reporting Platform**

CitizenConnect is a full-stack MERN application that enables citizens to report environmental and local community problems directly to local authorities. The platform aims to simplify civic issue reporting, improve communication between citizens and administrators, and help create cleaner, safer, and smarter communities.

---

# 🌍 Project Purpose

Many local problems remain unsolved because citizens do not have a simple platform to report them.

CitizenConnect provides an easy-to-use web application where users can:

* Report road damage
* Report drainage problems
* Report garbage accumulation
* Report broken street lights
* Report mentally disordered persons needing assistance
* Report abandoned or unsafe public places
* Report water logging and flooding
* Report environmental pollution
* Report any other local community problem

The administrator can review all reports, update their status, and manage users from a centralized dashboard.

---

# 🎯 Objectives

* Make community problem reporting easier
* Reduce communication gaps between citizens and authorities
* Store reports in a centralized database
* Provide real-time report management
* Improve transparency of reported issues

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hook Form
* React Hot Toast
* Context API

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* bcryptjs
* dotenv
* CORS

---

# 📂 Project Structure

```text
CitizenConnect/
│
├── client/
│
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │
│   │   ├── layouts/
│   │   │
│   │   ├── pages/
│   │   │     ├── Home/
│   │   │     ├── Login/
│   │   │     ├── Register/
│   │   │     ├── Reports/
│   │   │     ├── Dashboard/
│   │   │     ├── Profile/
│   │   │     └── Admin/
│   │   │
│   │   ├── routes/
│   │   │
│   │   ├── context/
│   │   │
│   │   ├── services/
│   │   │
│   │   ├── hooks/
│   │   │
│   │   ├── utils/
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   │
│   ├── config/
│   │     └── db.js
│   │
│   ├── controllers/
│   │     ├── authController.js
│   │     ├── reportController.js
│   │     ├── userController.js
│   │     └── adminController.js
│   │
│   ├── middleware/
│   │     ├── authMiddleware.js
│   │     ├── adminMiddleware.js
│   │     ├── uploadMiddleware.js
│   │     └── errorMiddleware.js
│   │
│   ├── models/
│   │     ├── User.js
│   │     └── Report.js
│   │
│   ├── routes/
│   │     ├── authRoutes.js
│   │     ├── reportRoutes.js
│   │     ├── userRoutes.js
│   │     └── adminRoutes.js
│   │
│   ├── uploads/
│   │
│   ├── utils/
│   │     ├── generateToken.js
│   │     └── deleteFile.js
│   │
│   ├── .env
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
├── README.md
└── .gitignore
```

---

# 👥 User Features

* User Registration
* Secure Login
* JWT Authentication
* View Profile
* Update Profile
* Change Password
* Create Reports
* Upload Images
* View Own Reports
* Edit Reports
* Delete Reports
* Search Reports
* Filter Reports

---

# 👨‍💼 Admin Features

* Secure Admin Login
* View All Users
* View All Reports
* Update Report Status
* Delete Reports
* Delete Users
* Dashboard Statistics

---

# 📌 Report Categories

* Road Damage
* Garbage Problem
* Drainage Problem
* Water Logging
* Flood
* Street Light Damage
* Environmental Pollution
* Mentally Disordered Person
* Public Safety Issue
* Other

---

# 🔐 Authentication

JWT Authentication is used to secure private APIs.

Protected routes require a valid access token.

---

# 🗄️ Database

MongoDB Atlas

Collections

* Users
* Reports

---

# 📤 Image Upload

Images are uploaded using Multer and stored inside:

```text
server/uploads/
```

---

# 📡 API Modules

Authentication

* Register
* Login
* User Profile

Reports

* Create Report
* Update Report
* Delete Report
* Get All Reports
* Get Single Report
* Search Reports
* Filter Reports

Users

* Profile
* Update Profile
* Change Password

Admin

* Users Management
* Reports Management
* Status Update

---

# 🚀 Backend Status

✅ Completed

* Authentication
* Authorization
* JWT
* MongoDB Integration
* CRUD Operations
* File Upload
* Middleware
* Error Handling
* Admin Panel APIs

---

# 🚧 Next Phase

Frontend Development

* Responsive UI
* Authentication Pages
* User Dashboard
* Admin Dashboard
* Interactive Report Form
* Reports List
* Search & Filter
* Profile Management
* Image Preview
* Protected Routes
* API Integration

---

# 📚 Future Improvements

* Google Maps Integration
* Live Location Detection
* AI-based Report Categorization
* Email Notifications
* Push Notifications
* Real-time Status Updates
* Analytics Dashboard
* Heat Map Visualization
* Dark Mode
* Multi-language Support
* Progressive Web App (PWA)

---

# 👨‍💻 Developer

**Md Tayam Hasan Mahim**

B.Sc. in Computer Science & Engineering

Delta Computer Science College

Bangladesh

---

# ⭐ Project Vision

CitizenConnect aims to build a smarter and more connected community by providing a modern platform where every citizen can easily report local problems and help improve their surroundings through technology.

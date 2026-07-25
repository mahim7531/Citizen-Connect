client/
│
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── robots.txt
│
├── src/
│
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero.png
│   │   │   ├── banner.jpg
│   │   │   ├── road.jpg
│   │   │   ├── garbage.jpg
│   │   │   └── placeholder.png
│   │   │
│   │   ├── icons/
│   │   │   ├── road.svg
│   │   │   ├── garbage.svg
│   │   │   ├── flood.svg
│   │   │   ├── light.svg
│   │   │   └── user.svg
│   │   │
│   │   └── logo/
│   │       ├── logo.png
│   │       └── logo-white.png
│   │
│   ├── components/
│   │
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Spinner.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── PageTitle.jsx
│   │   │
│   │   ├── navbar/
│   │   │   ├── Navbar.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   └── NavLinks.jsx
│   │   │
│   │   ├── footer/
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── cards/
│   │   │   ├── ReportCard.jsx
│   │   │   ├── DashboardCard.jsx
│   │   │   ├── UserCard.jsx
│   │   │   └── CategoryCard.jsx
│   │   │
│   │   ├── forms/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   ├── ReportForm.jsx
│   │   │   └── ProfileForm.jsx
│   │   │
│   │   └── ui/
│   │       ├── Input.jsx
│   │       ├── TextArea.jsx
│   │       ├── Select.jsx
│   │       ├── Badge.jsx
│   │       └── EmptyState.jsx
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   ├── DashboardLayout.jsx
│   │   └── AdminLayout.jsx
│   │
│   ├── pages/
│   │
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── Login/
│   │   │   └── Login.jsx
│   │   │
│   │   ├── Register/
│   │   │   └── Register.jsx
│   │   │
│   │   ├── Reports/
│   │   │   ├── CreateReport.jsx
│   │   │   ├── AllReports.jsx
│   │   │   ├── ReportDetails.jsx
│   │   │   └── MyReports.jsx
│   │   │
│   │   ├── Dashboard/
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── Profile/
│   │   │   └── Profile.jsx
│   │   │
│   │   ├── Admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── ManageUsers.jsx
│   │   │   └── ManageReports.jsx
│   │   │
│   │   └── Error/
│   │       └── NotFound.jsx
│   │
│   ├── routes/
│   │   ├── Router.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── AdminRoute.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── AuthProvider.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useAxios.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── reportService.js
│   │   └── adminService.js
│   │
│   ├── api/
│   │   └── axios.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── formatDate.js
│   │   ├── uploadImage.js
│   │   └── helper.js
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── index.html
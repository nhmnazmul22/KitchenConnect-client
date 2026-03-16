# 🍽️ KitchenConnect — Frontend

KitchenConnect is a modern web application that connects local home chefs with customers looking for fresh, homemade meals.
This frontend is built using **React + Vite** and focuses on **performance**, **clean UI**, and **role-based user experience**.

---

## 🔗 Live Website

👉 **Live URL:** [https://kitchenconnect-a145a.web.app](https://kitchenconnect-a145a.web.app)

---

## 🎯 Purpose of the Project

The goal of **KitchenConnect** is to:

- 🍳 Help home cooks earn by selling homemade meals
- 🛒 Allow users to browse daily meals, order food, and track orders
- 🔐 Provide a secure, role-based dashboard system for **Users**, **Chefs**, and **Admins**

---

## 🧠 Project Focus

This project was developed as part of an **advanced MERN Application** with a strong emphasis on:

- 🔑 JWT Authentication & Authorization
- 🎨 Clean and intuitive UI/UX
- 🔄 Real-world backend integration

---

## 🚀 Key Features

### 🔐 Authentication & Authorization

- Email & password authentication using **Firebase**
- JWT-based authentication (**httpOnly cookie**)
- Role-based access control (**User / Chef / Admin**)
- Protected routes that do not redirect on reload

---

## 🏠 Public Pages

### Home Page

- Animated Hero section (**Framer Motion**)
- Dynamic daily meals (6 items)
- Customer reviews section
- +More Extra section

### Meals Page

- Meal cards with chef & food details
- Sort by price (ascending / descending)
- Pagination (10 meals per page)
- Login required for meal details

---

## 📄 Private Pages

### Meal Details Page

- Full meal information
- Review section (add & view reviews)
- Favorite meal functionality

### Order Page

- Confirm order with quantity & address
- Total price calculation
- Order confirmation popup

---

## 📊 Dashboard (Role-Based)

### 👤 User Dashboard

- My Profile
- My Orders
- My Reviews (Update / Delete)
- Favorite Meals

### 👨‍🍳 Chef Dashboard

- My Profile
- Create Meal
- My Meals (Update / Delete)
- Order Requests (Accept / Deliver / Cancel)

### 🛠️ Admin Dashboard

- My Profile
- Manage Users (Fraud control)
- Manage Role Requests
- Platform Statistics (Charts with **Recharts**)

---

## ⭐ Additional Features

- Dynamic page titles for every route
- Fully responsive design (mobile friendly)
- Global loading spinner
- Global error page
- Toast & SweetAlert notifications
- Dark / Light theme (optional)

---

---

## 🧩 Technologies Used

### Frontend Core

- **React 19**
- **Vite**
- **React Router v7**
- **Axios**
- **React Hook Form**
- **TanStack React Query**
- **Framer Motion (motion)**
- **Recharts**
- **Firebase Authentication**

### UI & Styling

- **Tailwind CSS v4**
- **DaisyUI**
- **Lucide React (Icons)**
- **class-variance-authority**
- **clsx**
- **tailwind-merge**
- **tw-animate-css**

### Notifications & Alerts

- **React Hot Toast**
- **SweetAlert2**

---

## 📦 NPM Packages

### Core Dependencies

```bash
npm install react react-dom
npm install react-router axios
npm install @tanstack/react-query
npm install react-hook-form
npm install firebase
npm install motion recharts
npm install react-hot-toast sweetalert2
npm install lucide-react
npm install tailwindcss @tailwindcss/vite
npm install daisyui
npm install class-variance-authority clsx tailwind-merge
npm install tw-animate-css
npm install -D vite @vitejs/plugin-react
npm install -D eslint eslint-plugin-react-hooks eslint-plugin-react-refresh
npm install -D @eslint/js globals
npm install -D @tanstack/eslint-plugin-query
npm install -D @types/react @types/react-dom
```

## ▶️ Run the Project Locally

```bash
git clone https://github.com/nhmnazmul22/KitchenConnect-client.git
cd KitchenConnect-client
npm install
npm run dev
```

## Testing Credentials

### Admin Access (For Testing)

Admin Email: testadmin123@gmail.com
Admin Password: @Testadmin123

### Chef Access (For Testing)

Admin Email: testchef123@gmail.com
Admin Password: @Testchef123

### User Access (For Testing)

Admin Email: testuser123@gmail.com
Admin Password: @Testuser123

## 👨‍💻 Developer

Name: Nhm Nazmul
Project: KitchenConnect

### Please, support me to give start

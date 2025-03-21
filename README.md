# 🍽️ MealMate - Seamless Food Ordering Platform  

## 🌐 Live Demo:  
🔗 **[MealMate Live](https://updates-meal-mate-mmcw9ei35-suryas-projects-f3f7a1b9.vercel.app/)**  

MealMate is a **full-stack food ordering** web application that offers a smooth and secure experience. Users can **browse food items by category, manage their cart, place orders, track order status, and pay securely using Razorpay.**  

---

## 🚀 Features  

### 🔐 **Secure Authentication (JWT-based)**  
- **User Signup/Login** with email & password.  
- Passwords are **hashed using bcrypt** for security.  
- **JWT-based authentication** for protected routes.  

### 🛒 **Smart Cart Management**  
- **Add, remove, or update** items in the cart.  
- Cart **persists across sessions** even after page reload.  
- Automatic calculation of **subtotal & delivery fees**.  

### 🍕 **Food Categories & Filtering**  
- **Filter food by categories** (e.g., Biryani, Burgers, Desserts).  
- **Search feature** for quick meal discovery.  

### 💳 **Seamless Razorpay Payment Gateway**  
- **Integrated Razorpay** for smooth, secure online payments.  
- Users are **redirected to payment gateway** before confirming an order.  
- Orders are processed **only after successful payment**.  

### 📦 **Order Management & Tracking**  
- **Order placement with address input.**  
- Orders stored securely in **MongoDB**.  
- **Real-time order status tracking** (Processing → Out for Delivery → Delivered).  
- **Order history page** for users to track past purchases.  

---

## 🏗️ Tech Stack  

### **Frontend (Vite + React.js)**  
✅ **React.js** – Component-based UI.  
✅ **React Router** – Page navigation.  
✅ **Context API** – State management for cart & authentication.  
✅ **Axios** – API communication.  
✅ **Tailwind CSS** – Modern responsive design.  

### **Backend (Node.js + Express.js)**  
✅ **Express.js** – Handles API requests & routing.  
✅ **MongoDB + Mongoose** – Database & ORM.  
✅ **jsonwebtoken (JWT)** – Secure user authentication.  
✅ **bcrypt.js** – Password hashing for security.  
✅ **Razorpay API** – Secure online payments.  

---

## 🛠️ Installation & Setup  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/Surya2004-janardhan/MealMate_.git
cd MealMate_
```

### **2️⃣ Setup Backend**  
```bash
cd backend
npm install
```

- Start the backend server:  
  ```bash
  npm run server
  ```

### **3️⃣ Setup Frontend**  
```bash
cd frontend
npm install
```

- Start the frontend:  
  ```bash
  npm run dev
  ```

---

## 🚀 Deployment  

### **Frontend (Vercel)**  
- Deploy the frontend by linking it to **Vercel**.  
- Ensure API calls use the **live backend URL**.  

### **Backend (Render)**  
- Deploy the backend on **Render** with the correct environment variables.  
- Update the frontend API calls to use **Render’s backend URL**.  

---


## 🤝 Contributing  
Want to contribute? Feel free to fork the repo and submit a **Pull Request**. 🚀  

---

## 🛠️ Upcoming Features  
🚀 **Admin Dashboard** – Manage food items & orders.  
📱 **Mobile App Integration** – Future React Native app.  
🔔 **Real-time Notifications** – Order updates via WebSockets.  

---

💡 **Built with ❤️ by Surya Janardhan**

# 📌 Globetrotter - The Ultimate Travel Guessing Game! 🌍

> 🎮 A fun and interactive full-stack web app where users guess famous destinations based on cryptic clues! 
> Challenge your friends, track scores, and explore fun facts about the world's most iconic places.  

🚀 **Live Demo:** [Globetrotter Game](https://globetrotter-game.netlify.app/)  
🎮 **Backend API:** [Globetrotter API](https://globetrotter-backend-pnxh.onrender.com/)  

---

## 📜 Table of Contents

- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Installation & Setup](#-installation--setup)
- [🔗 API Endpoints](#-api-endpoints)
- [🌎 Deployment](#-deployment)
- [📌 Future Enhancements](#-future-enhancements)

---

## ✨ Features

✅ **Guess the Destination** – Get cryptic clues and select the correct place.  
✅ **Funky Feedback** – 🎉 Confetti for correct answers, 😢 animations for wrong ones.  
✅ **Leaderboard** – Track your score over **10 rounds**.  
✅ **Challenge a Friend** – Invite friends via WhatsApp with a **dynamic score link**.  
✅ **Beautiful UI** – Light Green + Yellow-Purple theme for an engaging experience.  
✅ **Responsive & Scalable** – Works on all devices with smooth animations.  

---

## 🛠 Tech Stack

### **Frontend (React + Vite)**
- **React.js** – Modern UI components
- **React Router** – Navigation & dynamic routing
- **Axios** – API communication
- **Confetti.js** – Fun animations
- **Framer Motion** – Smooth transitions

### **Backend (Node.js + Express + MongoDB)**
- **Express.js** – REST API
- **MongoDB + Mongoose** – Destination data storage
- **CORS & dotenv** – Secure environment variables
- **Render** – Backend hosting

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Singhjyoti24/The-Globetrotter.git
cd The-Globetrotter
```

### **2️⃣ Backend Setup**
```bash
cd backend
npm install
```
- Create a `.env` file and add your MongoDB URL:
  ```
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  ```
- Start the backend:
  ```bash
  npm start
  ```

### **3️⃣ Frontend Setup**
```bash
cd ../frontend
npm install
npm run dev
```

🚀 Open **http://localhost:5173** to view the app!


## 🔗 API Endpoints

### 🚀 **Destinations API**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/api/destinations/random` | Fetches a random destination with clues |
| `POST` | `/api/answer` | Validates the user's answer |

### 🏆 **User Challenge API**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/users/register` | Registers a user with a username & score |
| `GET` | `/invite?user=username&score=5` | Generates a shareable invite link |

---

## 🌎 Deployment

### **Frontend (Netlify)**
- Hosted on **[Netlify](https://globetrotter-game.netlify.app/)**  
- **Deployment Command:**  
  ```bash
  npm run build
  ```

### **Backend (Render)**
- Hosted on **[Render](https://globetrotter-backend-pnxh.onrender.com/)**  
- **Auto-deploy from GitHub**  

---

## 📌 Future Enhancements

✅ **Add Image-Based Clues** 🎭  
✅ **Multiplayer Mode** 🎮  
✅ **Timer-Based Challenge Mode** ⏳  
✅ **More Interactive UI & Animations** ✨  

---

## 📢 Contributing

🎉 Found a bug or want to enhance the game? **Fork & contribute!**  
📩 **Contact:** singhjyoti242002@gmail.com  

---

## ⭐ Like This Project? Give It a Star! ⭐
If you love **Globetrotter**, don't forget to ⭐ this repo! 🚀

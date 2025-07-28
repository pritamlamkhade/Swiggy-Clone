# 🍽️ Swiggy Clone

A fully responsive Swiggy-inspired food delivery web application built with **React**, **Redux**, and **Tailwind CSS**. This project replicates key Swiggy features including restaurant listings, authentication, search, cart management, offers, theming, and user preferences.

> 🔐 Includes protected routes, theme toggle, and multi-language support, Shimmer Loading placeholders for better UX .

---

## ✅ Features

### 🟢 Public Routes

- 👤 **Login & Signup** – User authentication flow
- 🏠 **Landing Page** – Public homepage showing restaurants

### 🔒 Private Routes

- 🧑‍💼 **User Account** – Profile and preferences
- 🈳 **Language Selector** – Switch UI language (i18n-ready)
- 🌗 **Theme Toggle** – Light/Dark mode support
- 🍴 **Restaurants** – Browse and view restaurant menus
- 🔍 **Search** – Search restaurants or food items
- 🎟️ **Offers** – List of current promotional offers
- 🛒 **Cart & Checkout** – Add/remove items, view cart, checkout flow
- 🆘 **Help/Support** – Static support or FAQ page
- 📦 **My Account** – View user data or order details (WIP)

---

## 🛠️ Tech Stack

| Frontend    | State Management | Styling     | Routing          | Auth          | i18n          | Other Tools        |
| ----------- | ---------------- | ----------- | ---------------- | ------------- | ------------- | ------------------ |
| React (CRA) | Redux Toolkit    | TailwindCSS | React Router DOM | Firebase Auth | react-i18next | Axios, React Icons |

---

## 📁 Folder Structure

```
src/
├── assets/
├── components/
├── pages/
├── redux/
├── routes/
├── utils/
├── App.js
└── index.js
```

---

## 🚀 Getting Started

### Clone & Install

```bash
# Clone the repo
git clone https://github.com/pritamlamkhade/Swiggy.git

# Navigate to project directory
cd Swiggy

# Install dependencies
npm install

# Start development server
npm start
```

---

## 📌 TODO / Upcoming

- [ ] Integrate real Swiggy API (with CORS proxy)
- [ ] Razorpay / Stripe checkout integration
- [ ] Admin dashboard (restaurant owner panel)
- [ ] Order tracking (WebSocket or polling)
- [ ] Add tests with Jest + React Testing Library

---

## 📄 License

This project is for educational purposes. It is not affiliated with or endorsed by Swiigy.

## 🙋‍♂️ Contributing

Pull requests are welcome. If you find a bug or want to propose a feature, feel free to [open an issue](https://github.com/pritamlamkhade/Swiggy/issues).

---

## 👨‍💻 Author

- [Pritam Lamkhade](https://www.linkedin.com/in/pritamlamkhade/)

---

## ⭐️ Show Support

If you like this project, leave a ⭐️ and consider sharing!

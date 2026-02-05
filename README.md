# Dream 11 🏏💰

A modern and interactive web application for building your fantasy cricket team. Users can browse available players, manage coins, select players, and track their team. Fully mobile-responsive and designed to match Figma mockups.

---

## 🔹 Project Overview

This project is a **Dream 11** with the following capabilities:

- Browse available cricket players and their details.
- Increase coins via banner interaction to buy players.
- Select and remove players from your team.
- Receive real-time notifications with **React-Toastify**.
- Newsletter subscription with optional login using **LocalStorage**.

It provides a seamless, interactive, and visually appealing experience for fantasy cricket enthusiasts.

---

## ⚡ Key Features

1. **Navbar & Coin Management**
   - Displays user's coin balance (starts at 0).
   - Coins increase when the banner button is clicked, enabling player purchases.
   - Matches Figma design with mobile responsiveness.

2. **Player Selection System**
   - Displays players in a responsive **3-column card layout**.
   - Player details include: Name, Country, Role, Batting/Bowling type, Image, and Bidding Price.
   - "Choose Player" button with validations:
     - Insufficient coins → Toast notification.
     - Player already selected → Toast notification.
     - Maximum of 6 players allowed.
   - Remove selected players with a "Remove" button, coins refunded automatically.
   - Hover effects: Player cards and icons change on hover for better UX.

3. **Dynamic Sections**
   - Toggle between **Available** and **Selected** players.
   - Selected section shows total selected count.
   - "Add More Players" button displays available players again.

4. **Newsletter Subscription (Optional)**
   - Users can subscribe with email stored in LocalStorage.
   - Personalized welcome message displayed if email exists on reload.

5. **Mobile-Responsive Design**
   - Fully optimized for mobile and tablet screens.
   - Banner, Navbar, Player Cards, and Sections adapt seamlessly to screen sizes.

---

## 🛠️ Technologies Used

- **React.js** – Frontend framework
- **React-Toastify** – Notifications and alerts
- **Tailwind CSS / CSS** – Styling and responsiveness
- **JSON** – Player data storage
- **LocalStorage** – Newsletter email persistence

---

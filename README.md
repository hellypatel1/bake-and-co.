# Bake & Co. Website

Bake & Co. is a romantic, visually appealing bakery website built using **EJS templates** for dynamic content rendering. This project showcases a bakery's offerings, including a home page, featured products, an about section, and customer testimonials.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Features](#features)
- [Pages](#pages)
- [Credits](#credits)

---

## Project Overview
Bake & Co. is an EJS-based bakery website designed with "The Lover" brand archetype. The website features clean layouts, smooth scrolling, and a warm color palette to create an inviting atmosphere for bakery enthusiasts.

---

## Technologies Used
- **Node.js** with **Express** (Backend)
- **EJS** (Templating Engine)
- **CSS** (Custom `main.css`)
- **JavaScript** (Interactive components in `main.js`)
- **Fonts**: Playfair Display, Lora, Dancing Script, Raleway

---

## File Structure
The following is the organized structure of the project:

```plaintext
BakeAndCo/
│
├── views/
│   ├── index.ejs          # Home Page
│   ├── about.ejs          # About Us Page
│   └── partials/
│       ├── navbar.ejs     # Navigation Bar
│       └── footer.ejs     # Footer
│
├── public/
│   ├── css/
│   │   └── main.css       # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/            # Static images (logo, products, etc.)
│
├── app.js                 # Main application file
├── package.json           # Project dependencies
└── README.md              # Documentation
```

---

## Setup Instructions
Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bake-and-co.git
   cd bake-and-co
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the application:**
   ```bash
   npm start
   ```
4. **View the website:**
   Open your browser and visit `http://localhost:3000`.

---

## Features
1. **Dynamic Content Rendering**
   - Modular design using EJS partials (`navbar.ejs`, `footer.ejs`).
   - Featured products, testimonials, and specials rendered dynamically.

2. **Responsive Design**
   - Fully responsive for desktop, tablet, and mobile devices.

3. **Smooth Animations**
   - Fade-in effects, hover animations, and pulse accents for an interactive experience.

4. **Hero Section**
   - Eye-catching hero banner with call-to-action buttons.

5. **Product Cards**
   - Display of featured products and seasonal specials with images, descriptions, and pricing.

6. **Newsletter Signup**
   - Simple subscription form for users to stay updated.

---

## Pages
1. **Home Page (`index.ejs`)**
   - Hero Section
   - Featured Products
   - Specials/Promotions
   - Testimonials
   - Newsletter Signup

2. **About Us Page (`about.ejs`)**
   - Philosophy and Bakery Story
   - CTA to explore the menu

3. **Common Components**
   - **Navbar (`navbar.ejs`)**: Navigation links and order button.
   - **Footer (`footer.ejs`)**: Quick links, social media, and contact information.

---

## Credits
- **Developer**: Pavan Patel
- **Framework**: Node.js & Express
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Icons/Images**: Placeholder URLs (replace with real images).

---

## Future Enhancements
- Add a full-fledged contact form.
- Integrate a shopping cart system.
- Implement backend for dynamic product management.

---

Crafted with ❤️ for **Bake & Co.**
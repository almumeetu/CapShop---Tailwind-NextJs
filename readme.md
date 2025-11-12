# 🧢 CapShop - Modern E-commerce Store

A modern, responsive cap shop e-commerce website built with HTML and Tailwind CSS. This project showcases a clean, professional design with smooth animations and an intuitive user interface for browsing and purchasing caps.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

CapShop is a fully responsive e-commerce landing page designed for selling caps and headwear. The website features a modern design with smooth animations, an intuitive navigation system, and optimized product showcases including trending items, best deals, and personalized recommendations.

**Live Demo:** [View Demo](https://github.com/almumeetu/CapShop---Tailwind-NextJs) <!-- Add your demo link here -->

## ✨ Features

### Design & UI
- 🎨 **Modern & Clean Interface** - Professional design with custom abstract logo
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🌈 **Smooth Animations** - Custom CSS animations for navigation links and UI elements
- 🎭 **Interactive Elements** - Hover effects, dropdown menus, and animated underlines
- 🖼️ **Vignette Effects** - Elegant visual effects on hero sections

### Navigation
- 🧭 **Desktop Navigation** - Full navigation bar with animated hover effects
- 📲 **Mobile Menu** - Hamburger menu with smooth slide-in animation
- 🛒 **Shopping Cart** - Integrated cart icon with item count badge
- 🔍 **Search Functionality** - Quick search feature for products
- ❤️ **Wishlist** - Save favorite items for later

### Product Sections
- 🔥 **Hero Section** - Eye-catching main banner with featured products
- 📈 **Trending Products** - Showcase of popular items
- 💰 **Best Deals** - Special offers and discounted products
- 🎁 **Just for You** - Personalized product recommendations
- 🏷️ **Category Filters** - Easy product browsing by category

### Performance & SEO
- ⚡ **Fast Loading** - Optimized assets and CDN integration
- 🔍 **SEO Friendly** - Semantic HTML structure
- ♿ **Accessible** - WCAG compliant design patterns
- 📊 **Font Awesome Icons** - Professional icon library integration

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and structure |
| **Tailwind CSS** | Utility-first CSS framework via CDN |
| **JavaScript** | Interactive functionality and DOM manipulation |
| **Font Awesome 6.5.1** | Icon library for UI elements |
| **Google Fonts** | Inter & Poppins font families |

### Key Libraries & Resources
```
- Tailwind CSS CDN: https://cdn.tailwindcss.com
- Font Awesome: 6.5.1
- Google Fonts: Inter (400, 600, 700), Poppins (400)
```

## 📁 Project Structure

```
CapShop---Tailwind-NextJs/
│
├── index.html              # Main HTML file
├── readme.md              # Project documentation
├── tailwind-config.js     # Tailwind CSS configuration
│
└── assets/
    ├── fonts/             # Custom font files
    ├── image/             # Image assets
    │   ├── best-deal/     # Best deals product images
    │   ├── hero/          # Hero section images
    │   ├── just-for-you/  # Personalized recommendations images
    │   ├── logo/          # Brand logos and icons
    │   ├── trending/      # Trending products images
    │   └── favicon.png    # Site favicon
    │
    └── js/
        └── main.js        # Custom JavaScript functionality
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.) - optional
- Basic knowledge of HTML/CSS - optional

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/almumeetu/CapShop---Tailwind-NextJs.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd CapShop---Tailwind-NextJs
   ```

3. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local development server for better development experience

### Using Live Server (Recommended)

If you're using VS Code, you can use the Live Server extension:

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click on `index.html`
3. Select "Open with Live Server"

Alternatively, use Python's built-in server:
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

Or Node.js:
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server

# Then open http://localhost:8080 in your browser
```

## 💻 Usage

### Basic Setup
The website is ready to use out of the box. Simply open `index.html` in a browser to view the site.

### Customization Guide

#### 1. **Update Colors**
Edit the Tailwind configuration in `tailwind-config.js`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'your-color': '#hexcode',
            }
        }
    }
}
```

#### 2. **Change Product Images**
Replace images in the respective folders under `assets/image/`:
- `hero/` - Main banner images
- `trending/` - Trending products
- `best-deal/` - Sale items
- `just-for-you/` - Recommended products

#### 3. **Modify Navigation**
Update navigation links in `index.html` around line 278 (desktop) and line 397 (mobile).

#### 4. **Edit Content**
All content is contained in `index.html`. Search for specific sections using comments:
```html
<!-- Hero Section Start Form Here -->
<!-- Trending Section -->
<!-- Best Deals Section -->
```

#### 5. **Add Custom JavaScript**
Add your custom functionality in `assets/js/main.js`.

## 🌐 Browser Support

| Browser | Supported Versions |
|---------|-------------------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Opera | Latest 2 versions |

**Note:** This project uses modern CSS features and may not work on very old browsers (IE11 and below).

## 🎨 Customization

### Adding New Products

1. Locate the desired section in `index.html`
2. Copy an existing product card structure
3. Update the image source and product details
4. Adjust pricing and descriptions

### Changing Fonts

Update the Google Fonts import in the `<style>` section:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600&display=swap');
```

### Modifying Logo

Replace the logo container structure in `index.html` or simply add your own logo image in `assets/image/logo/`.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Code Style Guidelines
- Use semantic HTML5 elements
- Follow Tailwind CSS utility-first approach
- Keep JavaScript modular and well-commented
- Maintain responsive design principles
- Test on multiple browsers before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Almumeet**
- GitHub: [@almumeetu](https://github.com/almumeetu)
- Repository: [CapShop---Tailwind-NextJs](https://github.com/almumeetu/CapShop---Tailwind-NextJs)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) - For the amazing utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) - For the comprehensive icon library
- [Google Fonts](https://fonts.google.com/) - For beautiful web fonts

## 📞 Support

If you have any questions or need help, please:
- Open an issue on [GitHub](https://github.com/almumeetu/CapShop---Tailwind-NextJs/issues)
- Contact via email (add your email if you want)

---

**⭐ If you find this project helpful, please consider giving it a star on GitHub!**

Made with ❤️ by [almumeetu](https://github.com/almumeetu)

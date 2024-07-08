
# EarthyEssence

Welcome to EarthyEssence, an online nursery where you can find a variety of plants to enrich your living space.

**Note**: This README is part of the initialization process. More information and detailed documentation will be added as the project progresses.

## Project Overview

EarthyEssence is an online nursery website developed using React, Tailwind CSS, TypeScript, Redux, and Vite. The website allows users to browse, filter, and search for products, add products to their cart, and make online payments via Stripe.js. Additionally, there is a product and category management section for CRUD operations.

## Features

### Public Routes 🚀
All routes on the website are accessible without authentication.

### Product and Category Management 🛠️
- **CRUD Products and Categories**: Create, read, update, and delete products and categories.
- **Management Routes**: Available on the frontend for easy management.

### Product Browsing 🌿
- **Filtering, Pagination, Sorting, and Searching**: Users can efficiently browse through our product offerings with advanced filtering, pagination, sorting options, and robust searching capabilities.
- **Product Details**: Users can view detailed information about a product.

### Shopping Cart 🛒
- **Add to Cart**: Users can add products to their cart by clicking an "Add to Cart" button. If a product is out of stock, it cannot be added to the cart.
- **Quantity Management**: Duplicate products are not added; instead, the quantity of the existing product is increased. Users cannot add more products than the available quantity in stock.
- **Proceed to Checkout**: Users can proceed to the checkout page from the cart section.

### Checkout and Payment 💳
- **Order Creation**: Orders are created in the database with customer details, and the system automatically decreases the quantity of each product in the order from available stock levels.
- **Payment Options**:
  - **Stripe Integration**: Users can make online payments securely using Stripe.js.
  - **Cash on Delivery (COD)**: Customers can choose to pay in cash upon delivery of their order.

## Landing Page Components
- **Navbar**: Navigation bar with links to various sections and pages.
- **Hero Section**: Highlighting the main features or promotions.
- **Product Search, Filter, and Pagination**: Options for users to refine their product search.
- **Category Section**: Display different product categories.
- **Product List**: Display products in card format with title, price, rating, and an "Add to Cart" button.
- **Product Details**: Comprehensive information including title, description, price, rating, and an "Add to Cart" button.
- **Image Gallery**: Showcases images of healthy individuals who have used our products.
- **Footer**: Additional links and information.

## Page List
- **Landing Page**: Main page with product search, filtering, pagination, category section, and product list.
- **Products Page**: Dedicated page with product pagination, filtering, and searching.
- **Product Details Page**: Detailed information about a specific product.
- **Checkout/Cart Page**: Displays products added to the cart and allows users to proceed to checkout.
- **Payment Page**: Page for handling payments through Stripe.js.
- **Product and Category Management Page**: Interface for managing products and categories.

## State Management
- **Redux**: Manages the state for products, categories, cart, and other actions.
- **Actions and Reducers**: Create actions and reducers for managing state changes.

## UI/UX
- **Quality**: The user interface is designed to be visually appealing and user-friendly. We follow UI/UX design principles to enhance the overall aesthetics and usability of the site.

## Bonus Features
- **Debounce API Calls**: Implemented debouncing for the search functionality to reduce the number of API calls.
- **Page Refresh Warning**: Shows a warning message when refreshing the page if the cart is not empty, to prevent loss of cart data.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd EarthyEssence
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the app.

## Technologies Used

- React
- Tailwind CSS
- TypeScript
- Redux
- Vite




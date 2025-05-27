# Fresh Cart - Indian Grocery Store

Fresh Cart is a modern e-commerce platform built with React, TypeScript, and Tailwind CSS, offering a seamless shopping experience for Indian groceries and household items.

![Fresh Cart Screenshot](https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- **User Authentication**
  - Email and password-based signup/login
  - Protected routes for authenticated users
  - Profile management

- **Product Management**
  - Browse products by categories
  - Search functionality
  - Product details with images and descriptions
  - Stock tracking

- **Shopping Cart**
  - Add/remove items
  - Adjust quantities
  - Persistent cart storage
  - Real-time total calculation

- **Checkout Process**
  - Multi-step checkout
  - Shipping information collection
  - Payment processing
  - Order confirmation

- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts
  - Touch-friendly interfaces

## Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - Tailwind CSS
  - React Router v6
  - Lucide React (icons)

- **Backend**
  - Supabase (Authentication & Database)

- **State Management**
  - React Context API
  - Local Storage for cart persistence

## Project Structure

```
src/
├── components/
│   ├── home/
│   │   ├── CategoryCard.tsx
│   │   └── Hero.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   └── product/
│       └── ProductCard.tsx
├── contexts/
│   ├── AuthContext.tsx
│   └── CartContext.tsx
├── data/
│   └── products.ts
├── pages/
│   ├── AccountPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── OrdersPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── ProductsPage.tsx
│   └── RegisterPage.tsx
├── utils/
│   └── formatCurrency.ts
├── App.tsx
└── main.tsx
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fresh-cart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Database Setup

The project uses Supabase as its backend. The database schema includes:

- `profiles` table for user information
- Row Level Security (RLS) policies for data protection
- Trigger functions for user management

## Deployment

The application can be deployed to Netlify:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

## Features in Detail

### Authentication Flow

- User registration with email/password
- Automatic profile creation on signup
- Protected routes with authentication checks
- Profile management capabilities

### Shopping Experience

- Category-based product browsing
- Advanced search functionality
- Detailed product pages
- Real-time stock tracking

### Cart Management

- Persistent shopping cart using localStorage
- Real-time price calculations
- Quantity adjustments
- Remove items functionality

### Checkout Process

1. Cart review
2. Shipping information
3. Payment details
4. Order confirmation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Product images from Pexels
- Icons from Lucide React
- UI inspiration from modern e-commerce platforms

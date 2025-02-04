# Capstone Project-StoreFleet

StoreFleet aims to be a formidable competitor by offering instant delivery not only for food and groceries but also for various products.This project is build by NodeJS and MongoDB.

## Features

- User authentication and authorization
- Product management (CRUD operations)
- Order management
- User profile management
- Product reviews and ratings
- Password reset via email
- Admin functionalities for managing users and products

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **JWT** - JSON Web Tokens for authentication
- **Nodemailer** - Node.js module for sending emails
- **bcryptjs** - Library to hash passwords

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/storefleet.git
    cd storefleet
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

4. The server will be running at `http://localhost:3000`.

## API Endpoints

### User Routes

- `POST /api/storefleet/user/signup` - Register a new user
- `POST /api/storefleet/user/login` - Login a user
- `GET /api/storefleet/user/logout` - Logout a user
- `GET /api/storefleet/user/details` - Get user details
- `PUT /api/storefleet/user/password/update` - Update user password
- `PUT /api/storefleet/user/profile/update` - Update user profile
- `POST /api/storefleet/user/password/forget` - Forget password
- `PUT /api/storefleet/user/password/reset/:token` - Reset password

### Product Routes

- `GET /api/storefleet/product/products` - Get all products
- `GET /api/storefleet/product/details/:id` - Get product details
- `POST /api/storefleet/product/add` - Add a new product (Admin only)
- `PUT /api/storefleet/product/update/:id` - Update a product (Admin only)
- `DELETE /api/storefleet/product/delete/:id` - Delete a product (Admin only)
- `PUT /api/storefleet/product/rate/:id` - Rate a product
- `GET /api/storefleet/product/reviews/:id` - Get all reviews of a product
- `DELETE /api/storefleet/product/review/delete` - Delete a review

### Order Routes

- `POST /api/storefleet/order/new` - Place a new order
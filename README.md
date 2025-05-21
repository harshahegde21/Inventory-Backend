# Inventory Management System

This is a simple **Inventory Management System** built with **Node.js**, **Express**, and **MongoDB** for the backend, and **React** for the frontend. The application allows users to manage inventory items, including adding new items and viewing existing ones.

## Project Structure

```
inventory-management-system/
├── client/                   # React frontend
│   ├── public/               # Public assets (HTML, images)
│   ├── src/                  # React components and source code
│   ├── package.json          # React dependencies and scripts
│   └── README.md             # Frontend README
│
├── server/                   # Node.js/Express backend
│   ├── controllers/          # Handle business logic
│   ├── models/               # Define data models
│   ├── routes/               # API routes
│   ├── config/               # Configuration files
│   ├── server.js             # Main entry point for the server
│   └── README.md             # Backend README
└── README.md                 # Root README for project overview
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/inventory-management-system.git
cd inventory-management-system
```

### 2. Setup Backend

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

### 3. Setup Frontend

Navigate to the `client` directory and install dependencies:

```bash
cd client
npm install
```

### 4. Running the Project

#### Run Backend

In the `server` directory, start the backend server:

```bash
cd server
node server.js
```

The backend will run on `http://localhost:5000`.

#### Run Frontend

In the `client` directory, start the React frontend:

```bash
cd client
npm start
```

The frontend will run on `http://localhost:3000`.

## API Endpoints

### 1. `GET /api/items`

Fetch all items in the inventory.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Item 1",
    "quantity": 50
  },
  {
    "id": 2,
    "name": "Item 2",
    "quantity": 30
  }
]
```

### 2. `POST /api/items`

Add a new item to the inventory.

**Request Body:**
```json
{
  "name": "New Item",
  "quantity": 20
}
```

**Response:**
```json
{
  "id": 3,
  "name": "New Item",
  "quantity": 20
}
```



# 🎬 Movie Manager API (Node.js + Express + MongoDB)

A modular, secure and validated RESTful backend API for managing a movie collection. Built using **Express**, **MongoDB (Mongoose)**, **JWT authentication**, and **Joi validation**.

This version includes full **modularization**, **data validation**, and **JWT-based authentication**.

## 📁 Features

✅ RESTful CRUD for Movies  
✅ Modular Express Routes & Controllers  
✅ Schema-level validation with **Mongoose**  
✅ Controller-level validation using **Joi**  
✅ JWT Authentication & Role-based Access Control  
✅ Middleware for authentication  
✅ Tested using **REST Client** or **Postman**

## 🔐 Authentication

JWT-based login system:

- `POST /auth/login` to receive a token
- Use `Authorization: Bearer <your_token>` for protected routes
- Roles: `admin` or `regular`

> Protected endpoints: **POST, PUT, DELETE**

## 🎯 Movie Schema (Validation Examples)

- **Mongoose-level validation** in `/models/Movie.js`
- **Joi-level controller validation** in `/controllers/movieController.js`

```js
// Joi schema example
const movieSchema = Joi.object({
  title: Joi.string().min(1).required(),
  director: Joi.string().min(1).required(),
  year: Joi.number().integer().min(1900).max(2100).required(),
});
```

## 🛠 Tech Stack

Node.js + Express
MongoDB + Mongoose
Joi validation
JWT Auth (jsonwebtoken)
dotenv, nodemon

## 🚀 Getting Started

Clone the project
git clone git@github.com:AlicjaKo/Movie-Manager.git
npm install
Create a .env file:
```
MONGODB_URI=mongodb://localhost:27017/moviesDB
JWT_SECRET=yourSuperSecretKey
PORT=3005
```
npm run dev

## 📄 License

MIT – Free to use for educational or non-commercial purposes.

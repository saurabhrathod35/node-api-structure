# 🚀 Node.js API Structure

A well-organized and scalable **Node.js REST API boilerplate** built using Express.js. This project helps developers quickly set up a robust backend with modular architecture and clean code separation.

## 📌 Purpose

This project serves as a starter template for developing RESTful APIs with:
- MVC architecture
- Middleware integration
- Configurable environment setup
- Modular and maintainable codebase

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Validation:** express-validator
- **Environment Management:** dotenv
- **Development Tools:** Nodemon, ESLint

## 📁 Folder Structure

```
node-api-structure/
├── src/
│   ├── config/         # DB and environment configuration
│   ├── controllers/    # Route handlers
│   ├── middlewares/    # Auth, error handling, etc.
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express route definitions
│   ├── services/       # Business logic
│   ├── utils/          # Utility functions
│   └── app.js          # Express app setup
├── .env                # Environment variables
├── .gitignore
├── package.json
├── server.js           # Entry point
└── README.md
```

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saurabhrathod35/node-api-structure.git
   cd node-api-structure
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - Create a `.env` file in the root directory:
     ```
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/your_db_name
     ```

4. **Run the server**
   - Development:
     ```bash
     npm run dev
     ```
   - Production:
     ```bash
     npm start
     ```

5. **Access the API**
   ```
   http://localhost:3000/api
   ```

## 🧪 Sample Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | /api/users         | Get all users       |
| POST   | /api/users         | Create a new user   |
| GET    | /api/users/:id     | Get user by ID      |
| PUT    | /api/users/:id     | Update user by ID   |
| DELETE | /api/users/:id     | Delete user by ID   |

## ✅ Features

- MVC Architecture
- Modular Codebase
- Centralized Error Handling
- Environment-Based Configuration
- Clean Separation of Concerns

## 🚀 Future Enhancements

- JWT Authentication
- Swagger API Docs
- Docker Support
- Unit Tests with Jest

## 👤 Author

**Saurabh Rathod**  
GitHub: [@saurabhrathod35](https://github.com/saurabhrathod35)

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

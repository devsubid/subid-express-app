# SUBID Express App CLI

**SUBID Express App CLI** is a command-line tool that helps developers quickly initialize a modern, scalable backend project using **Express.js**, **MongoDB**, and **Bun.js**. This template includes file-based routing, Docker integration, ESLint, Prettier, TypeScript, and Mongoose to jumpstart your development process.

---

## 🚀 Features

- **Express.js**: Lightweight, fast, and flexible web framework.
- **MongoDB + Mongoose**: Integrated schema-based data modeling and NoSQL database.
- **Bun.js**: Ultra-fast JavaScript runtime for improved performance.
- **File-based Routing**: Automatically map routes from the file system.
- **Docker**: Ready-to-use Docker configuration for development and production.
- **TypeScript**: Static typing for safer and more maintainable code.
- **ESLint + Prettier**: Enforce code quality and consistent formatting.

---

## 📦 Installation

You can use `bunx` to initialize the project in seconds:

```bash
bunx subid-express-app init <project-name>
```

Or install it globally:

```bash
bun install -g subid-express-app
subid-express-app init <project-name>
```

---

## 🛠️ Usage

1. Run the CLI tool to initialize a new project:

   ```bash
   bunx subid-express-app init my-project
   ```

2. Navigate to the project directory:

   ```bash
   cd my-project
   ```

3. Start the development server with Bun:

   ```bash
   bun run dev
   ```

4. Build the project for production:

   ```bash
   bun run build
   ```

5. Run the production build:
   ```bash
   bun run start
   ```

---

## 🌟 Features Overview

### 1. **File-Based Routing**

- Place route files in the `src/routes/` directory.
- Automatically loaded based on file structure.

### 2. **MongoDB Integration**

- Mongoose ORM is pre-configured for seamless database operations.
- Define your database models in `src/models/`.

### 3. **TypeScript Support**

- All TypeScript configurations are included for better code quality and maintainability.
- Pre-configured `tsconfig.json` for a smooth development experience.

### 4. **Linting and Formatting**

- **ESLint**: Ensures code quality and enforces best practices.
- **Prettier**: Automatically formats your code for consistency.

### 5. **Docker**

- Ready-to-use `Dockerfile` and `docker-compose.yml` for running your app in a containerized environment.

---

## 📁 File Structure

```plaintext
my-project/
├── src/
│   ├── config/            # Configuration files for different environments
│   ├── controllers/       # Define your controller logic
│   ├── data/              # Seed data and database initialization scripts
│   ├── middlewares/       # Custom middleware functions
│   ├── models/            # Mongoose models for MongoDB
│   ├── routes/            # File-based routing (automatically loaded)
│   ├── services/          # Business logic and services
│   ├── types/             # TypeScript type definitions and interfaces
│   ├── utils/             # Utility functions
│   └── app.ts             # Entry point of the application
├── .env                   # Environment variables
├── .eslint.config.js      # ESLint configuration
├── .prettierrc            # Prettier configuration
├── bun.build.js           # Bun.js build configuration
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile             # Dockerfile for containerization
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

### 6. **Additional Directories**

- **config/**: Configuration files for different environments.
- **data/**: Seed data and database initialization scripts.
- **middlewares/**: Custom middleware functions (e.g., loggers, authentication).
- **scripts/**: Database scripts for migrations and seeding.
- **types/**: TypeScript type definitions and interfaces.

---

## 🐳 Docker

1. Build and run the application using Docker:

   ```bash
   docker-compose up -d --build
   ```

2. Stop the containers:

   ```bash
   docker-compose down
   ```

---

## 🔧 Scripts

### Available Scripts

- `bun run dev`: Start the development server.
- `bun run build`: Build the application for production.
- `bun run start`: Run the production build.
- `bun run lint`: Lint the codebase using ESLint.
- `bun run format`: Format the code using Prettier.

---

## 📖 Learn More

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Bun.js Documentation](https://bun.sh/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

### 💬 Questions or Suggestions?

Feel free to reach out or open an issue on the [GitHub repository](https://github.com/devsubid/subid-express-app) if you have any questions or suggestions!

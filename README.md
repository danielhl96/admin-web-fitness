# Admin Web Fitness

This is the administration backend for a fitness application. It provides a web-based interface for managing administrators and users of the platform.

## Project Architecture

The project is a full-stack application with a following architecture:

- **Frontend**: A single-page application (SPA) built with **React** and **TypeScript**, using **Vite** for fast development and builds. Styling is done with **Tailwind CSS**.
- **Backend**: A **Node.js** server built with **Express.js** and **TypeScript**. It provides a RESTful API for all administrative actions.
- **Database**: The backend uses **Prisma** as an ORM to interact with two separate database schemas: one for the application's primary data (`schema.prisma`) and another for admin-specific data (`schema.admin.prisma`).
- **Containerization**: The entire application stack (frontend, backend, and database) is designed to be run with **Docker** and **Docker Compose**, ensuring a consistent development and production environment.

### Project Structure

The project is organized into a `frontend` and a `backend` directory, each with its own distinct structure.

#### Backend (`backend/src`)

The backend is a Node.js application built with Express.js. The source code is structured as follows:

- `controller/`: Contains the controllers that handle incoming API requests, process input, and interact with the service layer.
- `service/`: Holds the core business logic of the application. Services are responsible for data manipulation and interaction with the database via Prisma.
- `routes/`: Defines all the API endpoints and maps them to the corresponding controller functions.
- `middleware/`: Includes custom middleware for tasks such as authentication (`verifyAdmin`) and error handling (`ErrorMiddleware`).
- `prisma/`: Manages the Prisma client instance and database connection.
- `helper/`: Contains utility functions for common tasks like input validation (e.g., `emailvalid`, `passwordvalid`).
- `tests/`: Includes all integration and unit tests for the backend, written with Jest and Supertest.
- `app.ts`: The main application file where middleware, routes, and configurations are brought together.
- `server.ts`: The entry point for starting the HTTP server.

#### Frontend (`src`)

The frontend is a React single-page application (SPA) built with TypeScript and Vite. Its structure is component-based:

- `Pages/`: Contains the main page components that represent different views of the application, such as `Login.tsx` and `Dashboard.tsx`.
- `Components/`: A collection of reusable UI components used across different pages (e.g., `Button.tsx`, `Input.tsx`, `Modal*.tsx`).
- `Auth/`: Holds authentication-related components and logic, including the `AuthProvider` for managing user sessions and `ProtectedRoute` for restricting access to certain pages.
- `utils/`: Includes utility functions and custom hooks, such as `api.ts` for making API calls to the backend and `useUserCredential.tsx` for managing user data.
- `main.tsx`: The entry point of the React application where the root component is rendered.

## Features

The application provides the following features:

### Admin Management

- Secure admin login and logout with session management.
- Admin registration and deletion.
- Fetching a list of all administrators.
- JWT-based authentication with token refresh and authentication status checks.

### User Management

- User registration and deletion.
- Fetching a list of all users.
- Updating user email addresses.
- Updating user passwords.
- Locking and unlocking user accounts.

## Technologies & Tools Used

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Prisma**: Modern database toolkit for Node.js and TypeScript.
- **Jest**: JavaScript testing framework.
- **Supertest**: Library for testing Node.js HTTP servers.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: For type-safe frontend code.
- **Vite**: Next-generation frontend tooling.
- **Tailwind CSS**: A utility-first CSS framework.
- **PostCSS**: A tool for transforming CSS with JavaScript.

### General

- **Docker & Docker Compose**: For containerization and orchestration of the application stack.
- **ESLint**: For identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Test Coverage

The backend includes a suite of integration tests written with **Jest** and **Supertest**. The tests cover the majority of the API endpoints.

### Unit Tests

The unit tests contain several tests for the admin, user, and middleware services. They are located in `backend/src/tests/unit/` and include:

- **Admin Service Tests** (`admin.service.test.ts`): Tests for admin authentication, registration, fetching admins, and deletion logic.
- **User Service Tests** (`user.service.test.ts`): Tests for user registration, fetching users, updates, locking accounts, and user deletion.
- **Middleware Tests** (`middleware.test.ts`): Tests for the authentication middleware (`verifyAdmin`) and error handling.

### Admin API

| Route                       | Method | Status     |
| --------------------------- | ------ | ---------- |
| `/api/admins`               | GET    | ✅ Covered |
| `/api/admins/register`      | POST   | ✅ Covered |
| `/api/admins/login`         | POST   | ✅ Covered |
| `/api/admins/logout`        | POST   | ✅ Covered |
| `/api/admins/delete/:id`    | DELETE | ✅ Covered |
| `/api/admins/refresh_token` | POST   | ✅ Covered |
| `/api/admins/check_auth`    | GET    | ✅ Covered |

### User API

| Route                      | Method | Status     |
| -------------------------- | ------ | ---------- |
| `/api/users/register`      | POST   | ✅ Covered |
| `/api/users/:id/delete`    | DELETE | ✅ Covered |
| `/api/users/:id/email`     | PUT    | ✅ Covered |
| `/api/users/:id/user_lock` | PUT    | ✅ Covered |
| `/api/users`               | GET    | ✅ Covered |
| `/api/users/:id/password`  | PUT    | ✅ Covered |

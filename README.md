# identity-linker-api

# Overview

This is **identity-linker-api**, a RESTful API built with **Node.js**, **TypeScript**, and **Sequelize** connected to a **MySQL** database. It provides identity/contact management functionality with validation, testing, and swagger documentation.


## Tech Stack

* **Node.js** with **TypeScript**
* **Sequelize ORM** for MySQL integration
* **MySQL** database
* **Joi** for request validation
* **Jest** for testing
* **Swagger** for API documentation
* **Docker** and **Docker Compose** for containerized development

---

## Getting Started

### Prerequisites

* Node.js (v16 or above recommended)
* MySQL (v8 recommended) or Docker Desktop with Docker Compose

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/pragatmishra/identity-linker-api.git
cd identity-linker-api
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables**
   Copy `.env.example` to `.env` and update with your MySQL credentials and other config:

```bash
cp .env.example .env
```

Edit `.env` accordingly.

4. **Run with Docker (recommended)**
   If you have Docker Desktop installed, simply start services using:

```bash
docker compose up
```

To stop the containers:

```bash
docker compose down
```

5. **Run locally without Docker**
   Make sure MySQL server is running locally, then start server:

```bash
npm start
# or
yarn start
```

6. **Run tests**

```bash
npm test
# or
yarn test
```

7. **Access API docs**
   Open in browser:

```
http://localhost:3000/api/v1/api-docs
```

## Notes

* The project uses **TypeScript** with strict typing for reliability.
* Sequelize ORM handles database migrations and seeders.
* Validation is implemented using Joi for request payloads.
* Docker configuration makes it easy to run everything consistently on any machine.
* Unit and integration tests use Jest.


## Author

**Pragati Mishra** — Full-stack Developer passionate about building clean, scalable backend APIs with TypeScript and Node.js.
Find me on [GitHub](https://github.com/pragatmishra).

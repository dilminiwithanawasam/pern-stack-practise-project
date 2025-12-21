PERN Stack Tutorial
Introduction

This project is a PERN stack tutorial application using PostgreSQL, Express, React, and Node.js. The backend is built with Node.js and Express, connects to a PostgreSQL database, and includes common middleware for security, logging, and configuration.

The repository is structured to support modern JavaScript using ES modules and a development workflow powered by Nodemon.

Table of Contents

Features

Tech Stack

Installation

Environment Variables

Usage

Project Structure

Dependencies

Scripts

Troubleshooting

License

Features

Express-based REST API

PostgreSQL database integration

Environment variable support with dotenv

Security headers via helmet

Request logging with morgan

CORS support

Hot-reloading development server using Nodemon

Ready for serverless Postgres (Neon)

Tech Stack

Backend: Node.js, Express

Database: PostgreSQL

ORM / Client: postgres

Security: Helmet, Arcjet

Logging: Morgan

Dev Tools: Nodemon

Language: JavaScript (ES Modules)

Installation

Clone the repository

git clone <your-repo-url>
cd pern-stack-tutorial


Install dependencies

npm install


Create an environment file

touch .env

Environment Variables

Create a .env file in the root directory and configure the following:

PORT=5000
DATABASE_URL=postgresql://user:password@host:port/database


If you are using Neon, use the connection string provided in the Neon dashboard.

Usage
Start the development server
npm run dev


This will start the backend server using Nodemon and automatically restart it on file changes.

By default, the server entry point is:

backend/server.js

Project Structure (Expected)
pern-stack-tutorial/
├── backend/
│   └── server.js
├── package.json
├── .env
└── README.md


You can expand this structure with routes, controllers, and middleware folders as the project grows.

Dependencies
Production

express – Web framework

postgres – PostgreSQL client

dotenv – Environment variable management

cors – Cross-origin requests

helmet – Security headers

morgan – HTTP request logging

@neondatabase/serverless – Serverless Postgres support

@arcjet/node – Security and protection middleware

Development

nodemon – Automatic server restarts during development

Scripts
Script	Description
npm run dev	Starts the backend server with Nodemon
Troubleshooting

Server won’t start

Check that .env exists and DATABASE_URL is set

Ensure PostgreSQL is running or your Neon database is active

Database connection errors

Verify your connection string

Confirm IP access or SSL requirements if using a hosted database

License

This project is licensed under the ISC License.

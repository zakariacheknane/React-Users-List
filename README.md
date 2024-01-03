# React Users List 

The ACME LLC User Management Project is a modern, full-stack application employing Node.js, TypeScript, and React.js.
The backend Rest API retrieves user data from the Dummy JSON API, featuring optional search functionalities. 
The React frontend utilizes Bootstrap for an appealing, responsive design, showcasing user information in cards. 
This project delivers an efficient, visually pleasing user management system for ACME LLC.


## Description

This project consists of a Node.js server created using `ts-node` and a React.js frontend with Vite. 
The necessary configuration files for these technologies are already included, and both the server and frontend directories are added to the `.gitignore` file to exclude them from version control.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (Choose one)

## Installation

1. Clone the repository:
  ```bash
   git clone https://github.com/zakariacheknane/React-Users-List.git
   ```
 2. Navigate to the project directory:
   ```bash
   cd React-Users-List
   ```
 3. Install dependencies for both server and frontend:
 ```bash
  cd backend
  npm install   # or yarn install
```
```bash
  cd ../acme_frontend
  npm install   # or yarn install
```
## Usage
Running the Server
Navigate to the server directory:

```bash
cd backend
```
Run the server using ts-node:
```bash
npx ts-node server.ts
```
The server will be running at http://localhost:3001.

Running the Frontend
Navigate to the frontend directory:
```bash
cd acme_frontend
```
Start the development server:
```bash
npm run dev   # or yarn dev
```
The frontend will be available at http://localhost:5173/ by default.

## Project Structure
backend/: Node.js server code
server.ts: Main server file

acme_frontend/: React.js frontend code
src/: Frontend source code

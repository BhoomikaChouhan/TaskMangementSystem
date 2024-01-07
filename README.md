
# Task Management System

This project is a simple Task Management System developed using Spring Boot for the backend and React for the frontend.

## Features

- View a list of tasks
- Add new tasks
- Update existing tasks
- Delete tasks

## Technologies Used

- **Backend:**
  - Java
  - Spring Boot
  - Spring Data JPA
  - MySQL 
  - Run by ./mvnw spring-boot:run

- **Frontend:**
  - React
  - Axios
  - run by yarn start

## Getting Started

### Prerequisites

- Java JDK 8 or later
- Node.js and npm
- MySQL Database
- IntelliJ IDEA, Visual Studio Code

### Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/task-management-system.git
   cd task-management-system
   ```

2. **Backend Setup:**
   - Open the Spring Boot project in your IDE.
   - Configure your MySQL database properties in `src/main/resources/application.properties`.
   - Run the Spring Boot application.

3. **Frontend Setup:**
   - Open a new terminal.
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React app:
     ```bash
     npm start
     ```

4. **Access the Application:**
   - Open your web browser and go to [http://localhost:3000](http://localhost:3000).

## API Endpoints

- **GET /api/tasks:** Get all tasks
- **GET /api/tasks/{id}:** Get a task by ID
- **POST /api/tasks:** Create a new task
- **PUT /api/tasks/{id}:** Update an existing task
- **DELETE /api/tasks/{id}:** Delete a task

## Author
Bhoomika Chouhan



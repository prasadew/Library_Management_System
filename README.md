# Library Management System

A comprehensive web-based application for managing library resources efficiently. This system simplifies the administration of book records, user accounts, and library operations through a user-friendly interface and robust backend architecture.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [System Architecture](#system-architecture)
- [Usage](#usage)
- [Contributing](#contributing)


## Features
- **Book Management:** Add, update, view, and delete book records.
- **User Authentication:** Secure login and registration with role-based access control (admin and users).
- **Input Validation:** Ensures the accuracy and integrity of user inputs.
- **Secure Backend:** Secure password hashing.

## Technologies Used
### Frontend
- React with TypeScript
- CSS for styling

### Backend
- ASP.NET for API development
- SQLite for database management

### Tools
- Postman for API testing
- Git for version control

## Getting Started
### Prerequisites
Ensure the following software is installed on your system:
- Node.js
- .NET SDK
- SQL Server

### Installation
1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/your-username/library-management-system.git
   \`\`\`

2. **Navigate to the project directory:**
   \`\`\`bash
   cd library-management-system
   \`\`\`

3. **Install frontend dependencies:**
   \`\`\`bash
   cd frontend
   npm install
   \`\`\`

4. **Set up the backend:**
   - Navigate to the backend folder.
   - Update the connection string in \`appsettings.json\` to match your SQL Server configuration.
   - Run the migration to set up the database:
     \`\`\`bash
     dotnet ef database update
     \`\`\`

5. **Start the frontend and backend servers:**
   - **Frontend:**
     \`\`\`bash
     npm start
     \`\`\`
   - **Backend:**
     \`\`\`bash
     dotnet run
     \`\`\`

6. Open the application in your browser at \`http://localhost:3000\`.

## System Architecture
The application follows a three-layered architecture:
1. **Frontend:** React handles UI interactions and communicates with the backend via REST APIs.
2. **Backend:** ASP.NET processes requests, performs business logic, and interacts with the database.
3. **Database:** SQL Server stores user and book information in a normalized schema.

## Usage
1. **Admin Access:**
   - Log in with admin credentials to manage all book records and user roles.
2. **User Access:**
   - Register as a user to view, search for available books & manage all book records .

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   \`\`\`bash
   git checkout -b feature-name
   \`\`\`

3. Commit your changes:
   \`\`\`bash
   git commit -m \"Add a meaningful commit message\"
   \`\`\`

4. Push to the branch:
   \`\`\`bash
   git push origin feature-name
   \`\`\`

5. Create a Pull Request.



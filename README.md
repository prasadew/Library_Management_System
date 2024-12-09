Library Management System
A comprehensive web-based application for managing library resources efficiently. This system simplifies the administration of book records, user accounts, and library operations through a user-friendly interface and robust backend architecture.

Table of Contents
Features
Technologies Used
Getting Started
Prerequisites
Installation
System Architecture
Usage
Contributing
License
Features
Book Management: Add, update, view, and delete book records.
User Authentication: Secure login and registration with role-based access control (admin and users).
Input Validation: Ensures the accuracy and integrity of user inputs.
Responsive Design: Seamless user experience across desktop and mobile devices.
Secure Backend: Token-based authentication and secure password hashing.
Technologies Used
Frontend
React with TypeScript
CSS for styling
Backend
ASP.NET for API development
SQL Server for database management
Tools
Postman for API testing
Git for version control
Getting Started
Prerequisites
Ensure the following software is installed on your system:

Node.js
.NET SDK
SQL Server
Installation
Clone the repository:

git clone https://github.com/your-username/library-management-system.git
Navigate to the project directory:

cd library-management-system
Install frontend dependencies:

cd frontend
npm install
Set up the backend:

Navigate to the backend folder.
Update the connection string in appsettings.json to match your SQL Server configuration.
Run the migration to set up the database:
dotnet ef database update
Start the frontend and backend servers:

Frontend:
npm start
Backend:
dotnet run
Open the application in your browser at http://localhost:3000.

System Architecture
The application follows a three-layered architecture:

Frontend: React handles UI interactions and communicates with the backend via REST APIs.
Backend: ASP.NET processes requests, performs business logic, and interacts with the database.
Database: SQL Server stores user and book information in a normalized schema.
Usage
Admin Access:
Log in with admin credentials to manage all book records and user roles.
User Access:
Register as a user to view and search for available books.
Contributing
Contributions are welcome! Follow these steps:

Fork the repository.
Create a new branch:
git checkout -b feature-name
Commit your changes:
git commit -m "Add a meaningful commit message"
Push to the branch:
git push origin feature-name
Create a Pull Request.
License
This project is licensed under the MIT License.

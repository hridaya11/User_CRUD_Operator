# User CRUD Operator - Fullstack Application

A complete fullstack web application for managing users with Create, Read, Update, and Delete (CRUD) operations. The project consists of a Spring Boot backend API and a React.js frontend interface.

## 🚀 Project Overview

This application demonstrates a modern fullstack architecture with:
- **Backend**: Spring Boot REST API with MySQL database
- **Frontend**: React.js application with Bootstrap UI
- **Features**: Complete user management system with responsive design

## 🏗️ Architecture

```
├── fullstack_backend/     # Spring Boot REST API
│   ├── src/main/java/
│   │   └── com/sample/fullstack_backend/
│   │       ├── controller/       # REST Controllers
│   │       ├── model/            # Entity Models
│   │       ├── repository/       # JPA Repositories
│   │       └── exception/        # Exception Handlers
│   └── src/main/resources/
│       └── application.properties
│
└── fullstack_frontend/    # React.js Application
    ├── src/
    │   ├── pages/         # React Components/Pages
    │   ├── users/         # User Management Components
    │   └── layout/        # Layout Components
    └── public/
```

## 📋 Features

### Backend Features
- ✅ RESTful API design
- ✅ Spring Boot 3.x framework
- ✅ MySQL database integration
- ✅ JPA/Hibernate for ORM
- ✅ Exception handling with custom advice
- ✅ CORS configuration for frontend integration

### Frontend Features
- ✅ React.js with modern hooks
- ✅ React Router for navigation
- ✅ Bootstrap for responsive UI
- ✅ Axios for API communication
- ✅ User management interface (Add, View, Edit, Delete)
- ✅ Form validation and error handling

## 🛠️ Technology Stack

### Backend
- **Framework**: Spring Boot 3.5.3
- **Language**: Java 17
- **Database**: MySQL
- **ORM**: Spring Data JPA / Hibernate
- **Build Tool**: Maven
- **Testing**: Spring Boot Test

### Frontend
- **Framework**: React.js 19.x
- **Routing**: React Router DOM 7.6.3
- **HTTP Client**: Axios 1.10.0
- **UI Framework**: Bootstrap 5.3.7
- **Build Tool**: Create React App
- **Testing**: React Testing Library

## 📦 Prerequisites

- **Java**: 17 or higher
- **Node.js**: 16 or higher
- **npm**: 8 or higher
- **Maven**: 3.8+
- **MySQL**: 8.0+

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/hridaya11/User_CRUD_Operator.git
cd User_CRUD_Operator
```

### 2. Database Setup
1. Install and start MySQL server
2. Create a database named `backend`:
```sql
CREATE DATABASE backend;
```
3. Update database credentials in `fullstack_backend/src/main/resources/application.properties` if needed:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/backend
spring.datasource.username=rooT
spring.datasource.password=<YOUR-DB-PASSWORD>
```
### 3. Backend Setup
```bash
# Navigate to backend directory
cd fullstack_backend

# Install dependencies and run
mvn clean install
mvn spring-boot:run
```
The backend server will start on `http://localhost:8080`

### 4. Frontend Setup
```bash
# Navigate to frontend directory (from project root)
cd fullstack_frontend

# Install dependencies
npm install

# Start the development server
npm start
```
The frontend application will start on `http://localhost:3000`

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| GET | `/user/{id}` | Get user by ID |
| POST | `/user` | Create new user |
| PUT | `/user/{id}` | Update user |
| DELETE | `/user/{id}` | Delete user |

## 📁 Project Structure

### Backend Structure
```
fullstack_backend/
├── src/main/java/com/sample/fullstack_backend/
│   ├── FullstackBackendApplication.java    # Main application class
│   ├── controller/
│   │   └── UserController.java             # REST API endpoints
│   ├── model/
│   │   └── User.java                       # User entity model
│   ├── repository/
│   │   └── UserRepo.java                   # JPA repository
│   └── exception/
│       ├── UserNotFoundException.java       # Custom exception
│       └── UserNotFoundAdvice.java         # Exception handler
└── src/main/resources/
    └── application.properties               # Database configuration
```

### Frontend Structure
```
fullstack_frontend/
├── src/
│   ├── App.js                              # Main app component
│   ├── pages/
│   │   └── Home.js                         # Home page component
│   ├── users/
│   │   ├── AddUsers.js                     # Add user form
│   │   ├── EditUser.js                     # Edit user form
│   │   └── ViewUser.js                     # View user details
│   └── layout/
│       └── Navbar.js                       # Navigation component
└── public/
    └── index.html                          # HTML template
```

## 🧪 Running Tests

### Backend Tests
```bash
cd fullstack_backend
mvn test
```

### Frontend Tests
```bash
cd fullstack_frontend
npm test
```

## 🚀 Building for Production

### Backend
```bash
cd fullstack_backend
mvn clean package
java -jar target/fullstack_backend-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd fullstack_frontend
npm run build
```

## 🔧 Configuration

### Backend Configuration
The backend can be configured via `application.properties`:
- Database URL, username, and password
- JPA/Hibernate settings
- Server port (default: 8080)

### Frontend Configuration
- API base URL can be configured in the Axios configuration
- Default development server runs on port 3000

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Hridaya11**
- GitHub: [@hridaya11](https://github.com/hridaya11)

## 🙏 Acknowledgments

- Spring Boot team for the excellent framework
- React.js team for the amazing frontend library
- Bootstrap team for the responsive UI components

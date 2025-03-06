# Todo Chrome Extension with Spring Boot & MySQL

This is a **Chrome Extension** that integrates with a **Spring Boot backend** and a **MySQL database** to manage tasks efficiently.

## 📌 Features
- **Add, update, and delete tasks** directly from the Chrome extension.
- **Persistent storage** using MySQL.
- **Interactive UI** with Google-inspired colors.
- **API integration** with a Spring Boot backend.

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, JavaScript (Chrome Extension)
- **Backend**: Spring Boot (Java)
- **Database**: MySQL

## 🚀 Setup Instructions

### 1️. Clone the Repository
```sh
git clone https://github.com/khushisinha20/todo-chrome-extension.git
cd todo-chrome-extension
```

### 2. Setup the Spring Boot Backend

- Install **Java (JDK 17 or later)** and **Maven** if not installed.
- Configure **MySQL** and create a database.

```sh
cd backend
mvn clean install
mvn spring-boot:run
```

### 3. Setup the Chrome Extension

- Open **Google Chrome** and go to `chrome://extensions/`
- Enable **Developer mode** (top-right corner).
- Click **Load unpacked** and select the **extension folder**.

### 4. Usage

- Open the **Chrome Extension** and start adding tasks.
- The tasks are stored in **MySQL** via the **Spring Boot API**.

📂 **Project Structure**
```bash
todo-chrome-extension/
│── backend/              
│   ├── src/main/java/    
│   ├── src/main/resources/ 
│   ├── pom.xml           
│── extension/           
│   ├── manifest.json     
│   ├── popup.html        
│   ├── popup.js          
│   ├── styles.css        
│── README.md            
```

🛠️ **API Endpoints**

| Method  | Endpoint     | Description      |
|---------|-------------|------------------|
| GET     | /tasks      | Fetch all tasks  |
| POST    | /tasks      | Add a new task   |
| PUT     | /tasks/{id} | Update a task    |
| DELETE  | /tasks/{id} | Delete a task    |


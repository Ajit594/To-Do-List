# TodoContextLocal

A modern Todo application with authentication, built using React, Redux, and Context API. This project demonstrates advanced state management patterns and route protection through authentication.


## ✨ Features

- 🔐 User authentication with Redux
- ✏️ Create, read, update, and delete todos
- 🎯 Priority levels for todos (High, Medium, Low)
- 💾 Local storage persistence
- 🛡️ Protected todo list behind authentication
- 🎨 Modern UI with Tailwind CSS

## 🛠️ Tech Stack

- React
- Redux for state management
- Context API for todo operations
- Tailwind CSS for styling
- Vite for development
- Local Storage for data persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── Login.jsx
│   ├── Logout.jsx
│   ├── TodoForm.jsx
│   └── TodoList.jsx
├── contexts/
│   ├── TodoContext.js
│   └── index.js
├── App.jsx
└── store.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm (v6+)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/todocontextlocal.git
cd todocontextlocal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎮 Usage

1. **Authentication**
   - Click "Login" to access the todo list
   - Click "Logout" to secure your todos

2. **Todo Operations**
   - Add new todos with priority levels
   - Edit existing todos
   - Mark todos as complete/incomplete
   - Delete unwanted todos
   - Priority levels (High/Medium/Low)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

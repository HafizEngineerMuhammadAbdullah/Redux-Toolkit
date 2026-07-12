# 🔄 Redux Intro — Counter App with Redux Toolkit

A beginner-friendly **Counter Application** built with **React** and **Redux Toolkit** — designed to learn the core concepts of Redux state management including Store, Slice, Reducers, `useSelector`, and `useDispatch`.

---

## 👤 Author

**Muhammad Abdullah**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammad-abdullah-360a87384/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HafizEngineerMuhammadAbdullah)

---

## ✨ Features

- ➕ **Increment** counter value
- ➖ **Decrement** counter value
- 🗃️ **Global State** managed via Redux Store
- 🍕 **Slice-based** reducer pattern with Redux Toolkit
- ⚡ Built with **Vite** for fast development

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.2.7 | UI Library |
| `react-dom` | ^19.2.7 | DOM Rendering |
| `@reduxjs/toolkit` | ^2.12.0 | Redux state management |
| `react-redux` | ^9.3.0 | Connect Redux with React |
| `vite` | ^8.1.1 | Build tool & dev server |

---

## 📁 Project Structure

```
Redux-Intro/
├── src/
│   ├── redux/
│   │   ├── features/
│   │   │   └── counterSlice.js   # Slice with increment & decrement reducers
│   │   └── store.js              # Redux Store configuration
│   ├── App.jsx                   # Main component with useSelector & useDispatch
│   ├── index.css                 # Global styles
│   └── main.jsx                  # React entry point with Provider
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧩 Code Breakdown

### 🗃️ `store.js` — Redux Store
Creates and configures the global Redux store with the counter reducer.

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer  // registers counterSlice reducer
    },
});
```

---

### 🍕 `counterSlice.js` — Slice
Defines the **state shape**, **initial value**, and **reducer functions**.

```js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 }
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

### 🖥️ `App.jsx` — UI Component
Reads state with `useSelector` and dispatches actions with `useDispatch`.

```jsx
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
```

---

## 🔄 Redux Data Flow

```
User clicks Button
      ↓
dispatch(increment()) / dispatch(decrement())
      ↓
counterSlice Reducer runs
      ↓
Store state updates (value + 1 or value - 1)
      ↓
useSelector detects change → UI re-renders
      ↓
Updated count displays on screen
```

---

## 💡 Key Redux Concepts Used

| Concept | Description |
|---------|-------------|
| `configureStore` | Creates the Redux store |
| `createSlice` | Defines state, reducers & actions together |
| `reducer` | Pure function that updates state |
| `actions` | `increment` & `decrement` exported from slice |
| `useSelector` | Reads state from the Redux store |
| `useDispatch` | Sends actions to the Redux store |
| `Provider` | Wraps the app to give all components access to the store |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/HafizEngineerMuhammadAbdullah/React-Series.git
cd ReduxToolkit/Redux-Intro
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. Open in Browser
```
http://localhost:5173
```

---

## 📸 UI Overview

```
┌─────────────────────────┐
│                         │
│           0             │  ← count value from Redux Store
│                         │
│  [Increment] [Decrement]│
│                         │
└─────────────────────────┘
```

---

## 🔗 Connect with Me

- 💼 [LinkedIn — Muhammad Abdullah](https://www.linkedin.com/in/muhammad-abdullah-360a87384/)
- 🐙 [GitHub — Muhammad Abdullah](https://github.com/HafizEngineerMuhammadAbdullah)

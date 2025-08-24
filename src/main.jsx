import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import TaskPage from "./pages/TaskPage.jsx";
import TimerPage from "./pages/TimerPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="timer" element={<TimerPage />} />
        <Route path="task" element={<TaskPage />} />
          <Route path="/" element={<App />}>
         
            {/* <Route index element={<HomePage />} /> */}
            <Route path="home" element={<HomePage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
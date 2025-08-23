import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,Routes,Route,createBrowserRouter,} from "react-router";
import TaskPage from "./pages/TaskPage.jsx";
import TimerPage from "./pages/TimerPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { Provider } from "react-redux";



createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/timer" element={<TimerPage />} />
      <Route path="/task" element={<TaskPage />} />
      <Route path="/" element={<App />}>
          

         
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

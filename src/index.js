import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { PortfolioTextQA } from "./Components/PortfolioTextQA";
import { ContactComponent } from "./Components/connect/contact";
import { Projects } from "./Components/Projects";
import { PortfolioCanvas } from "./Components/PortfolioCanvas";
import { PortfolioFullyCaptured } from "./Components/PortfolioFullyCaptured";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/textqa",
    element: <PortfolioTextQA />,
  },
  {
    path: "/canvas",
    element: <PortfolioCanvas />,
  },
  {
    path: "/fullyCaptured",
    element: <PortfolioFullyCaptured />,
  },
  {
    path: "/contact",
    element: <ContactComponent />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import FoodRoutine from "./pages/AdminDashboard/FoodRoutine/index.jsx";
// import Rules from "./pages/AdminDashboard/Rules/index.jsx";
// import Faq from "./pages/AdminDashboard/Faq/index.jsx";
import "./index.css";
import { persistor, store } from "./store/index.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryHandler from "./pages/ErrorBoundary/index.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorBoundaryHandler />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <GoogleOAuthProvider
              clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            >
              <App />
              {/* <FoodRoutine /> */}
              {/* <Rules /> */}
              {/* <Faq /> */}

              <ToastContainer />
            </GoogleOAuthProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

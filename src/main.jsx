import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { InfoProvider } from "./context/info.jsx";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <InfoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </InfoProvider>
  
);

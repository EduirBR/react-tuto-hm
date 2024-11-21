import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import App2 from "./APP2.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App2 />
    </StrictMode>
);

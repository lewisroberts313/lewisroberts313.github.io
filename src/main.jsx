// import the function that starts React
import { createRoot } from "react-dom/client";
// import the global styles
import "./styles.css";

// find the empty div with id root
const rootElement = document.getElementById("root");
// create a React root attached to that div
const root = createRoot(rootElement);

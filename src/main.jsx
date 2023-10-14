import ReactDOM from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./app/store";
import App from "./App.jsx";
import "./index.css";
import "./styles/tailwind.css";
import "./styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);

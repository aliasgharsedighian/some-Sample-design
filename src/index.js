import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./App/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

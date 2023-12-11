import ReactDOM from "react-dom/client";
import AppRouter from "./Routers/Routers";
import "./CSS/index.css";
import { Provider } from "react-redux";
import * as Store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={Store.default}>
    <AppRouter />
  </Provider>
);

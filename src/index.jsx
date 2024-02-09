import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "../src/redux/store";
import { Theme } from "./theme/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </Provider>
);

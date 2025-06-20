import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mystore from "./redux/store/store.js";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Provider>
//       <App />
//     </Provider>
//   </BrowserRouter>
// );

createRoot(document.getElementById("root")).render(
  <Provider store={mystore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Provider } from "react-redux";
import store from "./Redux/store";
import HomePage from "./Component/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<HomePage />} />

          </Routes>
        </Provider>
      </BrowserRouter>
      ,
    </>
  );
}

export default App;

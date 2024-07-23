import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

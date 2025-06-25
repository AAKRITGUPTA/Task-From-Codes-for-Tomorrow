import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={Router}></RouterProvider>
    </Provider>
  );
};

export default App;

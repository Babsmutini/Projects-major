import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from './store/index';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './errorpage';
import PodcastDetail from "./components/Podcasts/PodcastDetail";
import Framer from "./components/Framer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <Framer/>
      },
      {
        path: "shows/:showsID",
        element: <PodcastDetail/>
      }
    ]
  }


]) 

ReactDOM.render(
  <React.StrictMode>
  
    <Provider store={store}>
      <RouterProvider router={router}/>
  
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

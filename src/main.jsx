import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Inicio/Home.jsx";
import Sobre from "./routes/Sobre/Sobre.jsx";
import Trabalhos from "./routes/Trabalhos/Trabalhos.jsx";
import Contato from "./routes/Contato/Contato.jsx";

import Experiencia from "./components/Sobre/Experiencia/Experiencia.jsx";
import Educacao from "./components/Sobre/Educacao/Educacao.jsx";
import Habilidades from "./components/Sobre/Habilidades/Habilidades.jsx";
import SobreIn from "./components/Sobre/SobreIn/SobreIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Sobre",
        element: <Sobre />,
        children: [
          {
            path: "/Sobre/Experiencia",
            element: <Experiencia />,
          },
          {
            path: "/Sobre/Educacao",
            element: <Educacao />,
          },
          {
            path: "/Sobre/Habilidades",
            element: <Habilidades />,
          },
          {
            path: "/Sobre/Informacoes",
            element: <SobreIn />,
          },
        ],
      },
      {
        path: "/Trabalhos",
        element: <Trabalhos />,
      },
      {
        path: "/Contato",
        element: <Contato />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

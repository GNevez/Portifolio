import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import style from "./Sobre.module.scss";

import { motion } from "framer-motion";

const Sobre = () => {
  const location = useLocation();

  return (
    <div className={"container-fluid " + style.container}>
      <div className={"row " + style.row}>
        <div
          className={
            "col-lg-6 d-flex flex-column " +
            style.leftSide
          }
        >
          <div className={style.respTexto}>
            <motion.h2
              className={style.mainText}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, ease: "easeInOut" }}
            >
              Porque me contratar?
            </motion.h2>
            <motion.p
              className={style.subText}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, ease: "easeInOut" }}
            >
              Minha criatividade e produtividade são minhas maiores forças,
              permitindo-me abordar desafios de forma única e eficaz. Além
              disso, meu empenho é evidente em cada projeto que realizo,
              garantindo resultados de alta qualidade. <br /> <br />
              Estou sempre buscando mais conhecimento, o que me faz estar sempre
              atualizado sobre o conteúdo da área.
            </motion.p>
          </div>
          <div className={style.aboutOptions + " mt-4"}>
            <Link className={style.linkSobre} to="/Sobre/Experiencia">
              <motion.label
                htmlFor="experiencia"
                className={`${style.btnAbout} ${
                  location.pathname === "/Sobre/Experiencia" ? style.active : ""
                }`}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, ease: "easeInOut" }}
              >
                Experiencia
              </motion.label>
            </Link>
            <Link className={style.linkSobre} to="/Sobre/Educacao">
              <motion.label
                htmlFor="educacao"
                className={`${style.btnAbout} ${
                  location.pathname === "/Sobre/Educacao" ? style.active : ""
                }`}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, ease: "easeInOut" }}
              >
                Educação
              </motion.label>
            </Link>
            <Link className={style.linkSobre} to="/Sobre/Habilidades">
              <motion.label
                htmlFor="habilidades"
                className={`${style.btnAbout} ${
                  location.pathname === "/Sobre/Habilidades" ? style.active : ""
                }`}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, ease: "easeInOut" }}
              >
                Habilidades
              </motion.label>
            </Link>
            <Link className={style.linkSobre} to="/Sobre/Informacoes">
              <motion.label
                htmlFor="sobre"
                className={`${style.btnAbout} ${
                  location.pathname === "/Sobre/Informacoes" ? style.active : ""
                }`}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, ease: "easeInOut" }}
              >
                Sobre
              </motion.label>
            </Link>
          </div>
        </div>
        <div
          className={
            "col-lg-6 justify-content-center d-flex flex-column " +
            style.FotoContainer
          }
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sobre;

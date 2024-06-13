import React from "react";
import style from "./Home.module.scss";
import Foto from "../../components/Photo/Foto";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { easeInOut, motion } from "framer-motion";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 991);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={"container-fluid " + style.container}>
      <div className={"row " + style.row}>
        <div
          className={
            "col-lg-6 justify-content-center d-flex flex-column " +
            style.leftSide
          }
        >
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={"text-white " + style.bgTranmsp}
          >
            Desenvolvedor Full-Stack
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={"display-4 text-white " + style.bgTranmsp}
          >
            Ola, eu sou
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={"display-2 text-primary " + style.bgTranmsp}
          >
            <strong>Guilherme Neves</strong>
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={style.textoPequeno + " " + style.bgTranmsp}
          >
            Sou desenvolvedor full-stack especializado em desenvolvimento web.{" "}
            <br />
            Minhas principais tecnologias são: React, Angular, Node-js, PHP,
            Typescript, SQL, HTML, CSS, Sass!
          </motion.p>
          <div
            className={
              isMobile
                ? "d-flex justify-content-center flex-column align-items-center gap-4"
                : " d-flex gap-4"
            }
          >
            <motion.div
              className={style.btnContrate}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0, ease: "linear" },
              }}
              transition={{ delay: 0.8, ease: "backIn" }}
            >
              <Link to="/Contato" className={style.btnCor}>
                Me Contrate!
              </Link>
            </motion.div>
            <motion.a
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, ease: "backIn" }}
              className={style.btnCrv}
              href="../../assets/Curriculo-Guilherme.pdf"
              download={"Curriculo-Guilherme.pdf"}
            >
              Baixar CRV
            </motion.a>
          </div>
        </div>
        <div
          className={
            "col-lg-6 justify-content-center d-flex align-items-center " +
            style.FotoContainer
          }
        >
          <Foto />
        </div>
      </div>
    </div>
  );
};

export default Home;

import styles from "./Footer.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footerBar} container-fluid`}>
        <div className={styles.rowNav}>
          <div className={`col-lg-12 align-items-center ${styles.ItensNav}`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={`d-flex w-100 justify-content-center ${styles.bgTranmsp}`}
            >
              <Link to={"/"}>
                <p
                  className={`${styles.nome} ${styles.navItens} ${styles.bgTranmsp}`}
                >
                  Neves
                </p>
              </Link>
              <p className={`${styles.ponto} ${styles.bgTranmsp}`}>. </p>
            </motion.div>
            <p className={styles.rights}>Todos direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

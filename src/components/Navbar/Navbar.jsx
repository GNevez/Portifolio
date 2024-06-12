import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();

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

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const github = () => {
    const url = "https://github.com/GNevez";

    window.open(url, "_blank");
  };

  const email = () => {
    var destinatario = "guilhermenferraz@gmail.com";

    var mailtoLink = "mailto:" + destinatario;

    window.open(mailtoLink, "_blank");
  };

  const linkedin = () => {
    window.open(
      "https://www.linkedin.com/in/guilherme-neves-a749052a2/",
      "_blank"
    );
  };

  const isActive = (path) => {
    if (path === "/Sobre") {
      return location.pathname.startsWith(path);
    }
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`${styles.navBar} container-fluid`}>
        <div className={`row ${styles.rowNav}`}>
          <div className="col-lg-4 d-flex text-center align-items-center justify-content-center">
            <div className="col-lg-2 w-100"></div>
            <div
              className={`d-flex flex-column col-lg-8 w-100 justify-content-center ${styles.bgTranmsp}`}
            >
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

              <div
                className={
                  isMobile && isChecked
                    ? "d-flex justify-content-center"
                    : "d-none"
                }
                key={isChecked}
              >
                <ul className={`p-0 ${styles.ulNav}`}>
                  {[
                    { path: "/", label: "Inicio" },
                    { path: "/Sobre", label: "Sobre" },
                    { path: "/Trabalhos", label: "Trabalhos" },
                    { path: "/Contato", label: "Contato" },
                  ].map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 * (index + 1) }}
                    >
                      <Link
                        to={item.path}
                        className={`${styles.navItens} ${
                          isActive(item.path) ? styles.active : ""
                        }`}
                        onClick={() => setIsChecked(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className={`col-lg-2 w-100 justify-content-end d-flex ${styles.divBurger}`}
            >
              <div
                className={`${styles.hamburger} ${styles.burger} ${
                  !isChecked ? styles.checkBoxResize : ""
                }`}
              >
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  aria-label="Menu Toggle"
                />
                <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
                  <path
                    className={`${styles.lineTop} ${styles.line}`}
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="black"
                    d="M6 11L44 11"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="black"
                    d="M6 24H43"
                    className={`${styles.lineMid} ${styles.line}`}
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="black"
                    d="M6 37H43"
                    className={`${styles.lineBottom} ${styles.line}`}
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-6 justify-content-end gap-5 align-items-center ${styles.ItensNav}`}
          >
            {[
              { path: "/", label: "Inicio" },
              { path: "/Sobre", label: "Sobre" },
              { path: "/Trabalhos", label: "Trabalhos" },
              { path: "/Contato", label: "Contato" },
            ].map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                <Link
                  to={item.path}
                  className={`${styles.navItens} ${
                    isActive(item.path) ? styles.active : ""
                  }`}
                >
                  <h5>{item.label}</h5>
                </Link>
              </motion.div>
            ))}
          </div>
          <div
            className={`col-lg-2 justify-content-center gap-5 align-items-center ${styles.social}`}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className={styles.icons + " " + styles.bgTranmsp}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, ease: "easeInOut" }}
              onClick={github}
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </motion.svg>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, ease: "easeInOut" }}
              className={styles.icons + " " + styles.bgTranmsp}
              onClick={email}
            >
              <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
            </motion.svg>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, ease: "easeInOut" }}
              className={styles.icons + " " + styles.bgTranmsp}
              onClick={linkedin}
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </motion.svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import foto from "../../assets/foto.jpg";
import { motion } from "framer-motion";

import style from "./Foto.module.scss";

const Foto = () => {
  return (
    <motion.div className={`position-relative ${style.container}`}>
      <motion.svg className={style.motionSvg} viewBox="0 0 500 500">
        <motion.circle
          cx="50%"
          cy="50%"
          r="250"
          stroke="#fecb00"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
        />
      </motion.svg>
      <motion.img
        src={foto}
        alt="Foto"
        className={style.foto}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      />
    </motion.div>
  );
};

export default Foto;

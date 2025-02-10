import React from "react";
import style from "./Experiencia.module.scss";

const Experiencia = () => {
  return (
    <>
      <h3 className={style.mainText}>Minhas Experiencias</h3>
      <p className={style.subText}>
        Toda minha experiencia profissional no mercado de tecnologia em geral!
      </p>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex gap-4 p-0 mb-4">
            <div className={style.cardXp}>
              <p className={style.nomeEmp}>G4 Motocenter</p>
              <p className={style.tempXp}>2023-2024</p>
              <div className="d-flex">
                <p className={style.nomeEmp}>• </p>
                <p className={style.funcXp + " mx-2"}>
                  Desenvolvimento e manutenção de E-Commerce full-stack
                </p>
              </div>
            </div>
            <div className={style.cardXp}>
              <div>
                <p className={style.nomeEmp}>Free-Lancer</p>
              </div>
              <div className="d-flex">
                <p className={style.tempXp}>2022-2023</p>
              </div>
              <div className="d-flex">
                <p className={style.nomeEmp}>• </p>
                <p className={style.funcXp + " mx-2"}>
                  Desenvolvimento Web full-stack para empresas e pessoas
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 d-flex gap-4 p-0">
            <div className={style.cardXp}>
              <div>
                <p className={style.nomeEmp}>Free-Lancer</p>
              </div>
              <div className="d-flex">
                <p className={style.tempXp}>2020-2022</p>
              </div>
              <div className="d-flex">
                <p className={style.nomeEmp}>• </p>
                <p className={style.funcXp + " mx-2"}>
                  Edição e produção de vídeos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiencia;

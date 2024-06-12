import React from "react";
import style from "./Educacao.module.scss";

const Educacao = () => {
  return (
    <>
      <h3 className={style.mainText}>Minha Educação</h3>
      <p className={style.subText}>Toda minha experiencia educacional!</p>
      <div className="container">
        <div className="row">
          <div className={"col-lg-12 d-flex gap-4 p-0 mb-4 " + style.contCards}>
            <div className={style.cardXp}>
              <p className={style.nomeEmp}>
                Bacharelado Ciencias da Computação
              </p>
              <p className={style.tempXp}>2022 - Atualmente (2027)</p>
              <div className="d-flex">
                <p className={style.nomeEmp}>• </p>
                <p className={style.funcXp + " mx-2"}>
                  Universidade Católica de Brasília
                </p>
              </div>
            </div>
            <div className={style.cardXp}>
              <div>
                <p className={style.nomeEmp}>Fluencia em inglês - Master C2</p>
              </div>
              <div className="d-flex">
                <p className={style.tempXp}>2011-2020</p>
              </div>
              <div className="d-flex">
                <p className={style.nomeEmp}>• </p>
                <p className={style.funcXp + " mx-2"}>CCAA Brasília</p>
              </div>
            </div>
          </div>
          <div className={"col-lg-12 d-flex gap-4 p-0 " + style.contCards}>
            <div className={style.cardXp}>
              <div>
                <p className={style.nomeEmp}>
                  Bootcamp Desenvolvimento Full-Stack
                </p>
              </div>
              <div className="d-flex">
                <p className={style.tempXp}>2023</p>
              </div>
              <div className="d-flex">
                <p className={style.nomeEmp}>• </p>
                <p className={style.funcXp + " mx-2"}>Dio.me</p>
              </div>
            </div>
            <div className={style.cardXp}>
              <p className={style.nomeEmp}>Ensino Médio Completo</p>
              <p className={style.tempXp}>2008 - 2022</p>
              <div className="d-flex">
                <p className={style.nomeEmp}>• </p>
                <p className={style.funcXp + " mx-2"}>
                  Centro Educacional Católica de Brasília
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educacao;

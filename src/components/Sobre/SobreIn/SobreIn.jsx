import React from "react";
import style from "./SobreIn.module.scss";

const SobreIn = () => {
  return (
    <>
      <div className={style.cardAbout}>
        <h3 className={style.mainText}>Sobre Mim...</h3>
        <p className={style.subText}>
          Olá! Meu nome é Guilherme Neves, tenho 19 anos e sou uma pessoa
          altamente criativa e produtiva. Com um empenho excepcional, estou
          sempre em busca de novas ideias e soluções inovadoras. Atualmente,
          estou disponível para trabalho como desenvolvedor, pronto para
          contribuir com minha dedicação e habilidades. Se você procura alguém
          comprometido e talentoso, sou a pessoa certa para sua equipe!
        </p>
      </div>
      <div className={"gap-4 " + style.containerText}>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center text-center">
            <h5 className="text-white m-0">Nome:</h5>
            <p className={style.subText + " p-0 mx-2"}>
              Guilherme Neves M Ferraz
            </p>
          </div>
          <div className="d-flex align-items-center text-center">
            <h5 className="text-white m-0">Idade:</h5>
            <p className={style.subText + " p-0 mx-2"}>19</p>
          </div>
          <div className="d-flex align-items-center text-center">
            <h5 className="text-white m-0">Nacionalidade:</h5>
            <p className={style.subText + " p-0 mx-2"}>Brasileiro</p>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center text-center">
            <h5 className="text-white m-0">Telefone:</h5>
            <p className={style.subText + " p-0 mx-2"}>+55 (61) 996360029</p>
          </div>
          <div className="d-flex align-items-center text-center">
            <h5 className="text-white m-0">Email:</h5>
            <p className={style.subText + " p-0 mx-2"}>
              guilhermenferraz@gmail.com
            </p>
          </div>
          <div className="d-flex align-items-center text-center">
            <h5 className="text-white m-0">Linguas:</h5>
            <p className={style.subText + " p-0 mx-2"}>Português, Inglês</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreIn;

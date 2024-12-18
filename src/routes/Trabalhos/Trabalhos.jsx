import React from "react";
import style from "./Trabalhos.module.scss";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { register } from "swiper/element/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderBtn from "../../components/SliderBtn/SliderBtn";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import g4 from "../../assets/G4.png";
import shotz from "../../assets/Shotz.png";
import imobiliaria from "../../assets/imobiliaria.png";

import { Tooltip } from "react-tooltip";

const Trabalhos = () => {
  const projects = [
    {
      number: "01",
      name: "E-commerce Full-Stack",
      desc: "Desenvolvimento Full-Stack de E-commerce empresarial",
      tech: "Php, Javascript, HTML, CSS",
      repo: "",
      link: "",
      img: g4,
    },
    {
      number: "02",
      name: "Plataforma de jogos",
      desc: "Projeto Full-Stack de criação de salas de jogos competitivo, conta com integração de diversas API's",
      tech: "Node.js, React js, Sass",
      repo: "https://github.com/GNevez/Shotz-Plataforma",
      link: "",
      img: shotz,
    },
    {
      number: "03",
      name: "Plataforma Imobiliaria",
      desc: "Aplicação Full-Stack desenvolvida para agendamento/anuncio/contato entre cliente e imobiliária",
      tech: "Node.js, React.js, Typescript",
      repo: "",
      link: "https://ferrazimo.com.br",
      img: imobiliaria,
    },
  ];

  register();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);
  const [project, setProject] = useState(projects[0]);

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

  const handleSlideChange = (slider) => {
    const currentIndex = slider.activeIndex;

    setProject(projects[currentIndex]);
  };

  useEffect(() => {
    console.log(project);
  }, [project]);

  const handleGit = (repo) => {
    window.open(repo);
  };

  return (
    <div className={"container-fluid " + style.container}>
      <div className={"row " + style.row}>
        <div
          className={
            "col-lg-6 justify-content-center d-flex flex-column " +
            style.leftSide
          }
        >
          <h1 className={style.numberPage}>{project.number}</h1>
          <h3 className={style.projectName}>{project.name}</h3>
          <p className={style.descProj}>{project.desc}</p>
          <p className={style.techProject}>{project.tech}</p>
          <hr className={style.hr} />
          <div className={"d-flex gap-3"}>
            <button
              className={style.btnProject}
              onClick={project.repo === "" ? "" : () => handleGit(project.repo)}
              data-tooltip-id="repo"
              data-tooltip-content="Repositório Privado"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className={style.icons + " " + style.bgTranmsp}
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </button>
            {project.repo === "" ? (
              <Tooltip
                id="repo"
                place="top"
                style={{ backgroundColor: "#fecb00", color: "#222130" }}
                effect="float"
              />
            ) : (
              ""
            )}
            <button
              className={style.btnProject}
              onClick={project.link === "" ? "" : () => handleGit(project.link)}
              data-tooltip-id="link"
              data-tooltip-content="Link indisponível"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={style.icons + " " + style.bgTranmsp}
              >
                <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
            </button>
            {project.link === "" ? (
              <Tooltip
                id="link"
                place="top"
                style={{ backgroundColor: "#fecb00", color: "#222130" }}
                effect="float"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className={
            "col-lg-6 justify-content-center d-flex align-items-center " +
            style.FotoContainer
          }
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            spaceBetween={30}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={handleSlideChange}
            className="w-100"
          >
            {projects.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item.img} alt="" className={style.imgProject} />
                </SwiperSlide>
              );
            })}
            <SliderBtn />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Trabalhos;

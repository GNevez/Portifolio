import React from "react";
import style from "./Contato.module.scss";

import emailjs from "@emailjs/browser";

import { useState } from "react";

const Contato = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      to_name: "Guilherme",
      from_name: name,
      from_sobrenome: name2,
      from_email: email,
      message: message,
    };

    emailjs
      .send("service_kn3f4pq", "template_495uzks", templateParams, {
        publicKey: "e1neP2F_FTwfneKsc",
      })
      .then((response) => {
        setIsLoading(false);
        setStatus(
          "Email enviado com sucesso, você será respondido em instantes!"
        );
        setEmail("");
        setMessage("");
        setName("");
        setName2("");
      })
      .catch((err) => {
        setIsLoading(false);
        setStatus("Erro ao enviar email. Tente novamente mais tarde.");
        setEmail("");
        setMessage("");
        setName("");
        setName2("");
      });
  };

  return (
    <div className={"container " + style.container}>
      <div className={"row " + style.row}>
        <div
          className={
            "col-lg-8 justify-content-center d-flex flex-column " +
            style.leftSide
          }
        >
          <div className={style.boxContato}>
            <form onSubmit={handleSubmit} className="h-100">
              <div
                className={
                  "d-flex justify-content-center flex-column " +
                  style.contTextos
                }
              >
                <h3 className={style.mainText}>Vamos trabalhar juntos!</h3>
                <p className={style.subText}>
                  Me envie um email com sua duvida/proposta/interesse e irei
                  responde-lo(a) em instantes!
                </p>
              </div>
              <div className={style.inputsName}>
                <div
                  className={"d-flex flex-column gap-4 " + style.containerInput}
                >
                  <input
                    type="text"
                    className={style.inputContato}
                    placeholder="Primeiro Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div
                  className={"d-flex flex-column gap-4 " + style.containerInput}
                >
                  <input
                    type="text"
                    className={style.inputContato}
                    placeholder="Segundo Nome"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="email"
                  className={style.inputContato}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <textarea
                name=""
                id=""
                className={style.textContato}
                placeholder="Digite sua mensagem aqui"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <div className="d-flex m-3 justify-content-center">
                {isLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={style.loading}
                  >
                    <path
                      fill="#fecb00"
                      d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
                    />
                  </svg>
                ) : (
                  <button className={style.btnContato}>Enviar Mensagem</button>
                )}
              </div>
              <div className={style.message}>
                <p>{status}</p>
              </div>
            </form>
          </div>
        </div>
        <div
          className={
            "col-lg-4 justify-content-center d-flex align-items-center " +
            style.rightSide
          }
        >
          <div className="d-flex flex-column gap-5">
            <div className="d-flex">
              <div className={style.boxCtts}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={style.iconCtts}
                >
                  <path
                    fill="#fecb00"
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                  />
                </svg>
              </div>
              <p className={style.textCtts}>+55 61 99636-0029</p>
            </div>
            <div className="d-flex">
              <div className={style.boxCtts}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={style.iconCtts}
                >
                  <path
                    fill="#fecb00"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  />
                </svg>
              </div>
              <p className={style.textCtts}>guilhermenferraz@gmail.com</p>
            </div>
            <div className="d-flex">
              <div className={style.boxCtts}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className={style.iconCtts}
                >
                  <path
                    fill="#fecb00"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </div>
              <p className={style.textCtts}>Guilherme (Ferraz) Neves</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;

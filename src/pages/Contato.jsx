import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "../components/head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Loja Master | Contato" description="Entre em contato" />

      <img src={foto} alt="Máquina de Escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>marcus-vnt@live.com</li>
          <li>(32) 99999-9999</li>
          <li>Rua Logo Ali, 333</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;

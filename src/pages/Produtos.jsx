import React from "react";
import styles from "./Produtos.module.css";
import Head from "../components/head";
const Produtos = () => {
  return (
    <div className={styles.produtos}>
      <Head title="Loja Master | Produtos" description="Página de produtos" />
      <h1>Produtos</h1>
    </div>
  );
};

export default Produtos;

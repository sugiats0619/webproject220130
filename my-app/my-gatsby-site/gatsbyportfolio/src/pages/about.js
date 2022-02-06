import * as React from "react";
import { Helmet } from "react-helmet";
import * as styles from "./about.module.css";
import Layout from "../components/Layout";

const AboutPage = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>My Gatsby Site</title>
        <meta name="description" content="My first gatsby website" />
      </Helmet>
      <p className={styles.name}>山田太郎</p>
      <p className={styles.text}>
        都内でウェブサービスやスマホアプリを作るフロントエンドエンジニアです。
        新規事業の立ち上げが得意です。
      </p>
    </Layout>
  );
};

export default AboutPage;

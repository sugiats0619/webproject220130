import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import * as styles from "./index.module.css";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import WorkItem from "../components/WorkItem";

const works = [
  {
    title: "『執筆DAYS』 リニューアル",
    roles: ["WordPress", "React"],
    imageUrl: "/work.png",
  },
  {
    title: "『締め切りTU-RYDAY』公式サイト",
    roles: ["React", "Gatsby", "Figma"],
    imageUrl: "/work.png",
  },
  {
    title: "『ブルーバードコミックス』サービスサイト",
    roles: ["React", "Next.js"],
    imageUrl: "/work.png",
  },
];

const IndexPage = (props) => {
  const { allFeedQiita, allWorksYaml } = props.data;
  return (
    <Layout>
      <Helmet>
        <title>My Gatsby Site</title>
        <meta name="description" content="My first react website" />
      </Helmet>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.profile}>
        都内でウェブサービスやスマホアプリを作るフロントエンドエンジニア・UIデザイナーです。
        新規事業の爆速立ち上げや、使いやすいSPAの開発が得意です。
      </p>
      <h2 className={styles.heading}>Posts</h2>
      {allFeedQiita.nodes.map((post) => {
        return <PostItem post={post} />;
      })}
      <h2 className={styles.heading}>Works</h2>
      <div className={styles.workItems}>
        {allWorksYaml.nodes.map((work) => {
          return <WorkItem work={work} />;
        })}
      </div>
    </Layout>
  );
};
export const query = graphql`
  query MyQuery {
    allFeedQiita(limit:4) {
      nodes {
        title
        link
        pubDate(formatString:"YYYY.MM.DD")
      }
    }

    allWorksYaml(limit:4) {
      nodes {
        slug
        title
        description
        imageUrl
        roles
      }
    }
  }
`;
export default IndexPage;

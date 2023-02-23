import { Navbar } from "../Navbar";
import Head from "next/head";
import styles from "./MainLayout.module.css";
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }:Props) => {
  return (
    <>
    
      <Navbar />

      <Head>
        <title>Home- Erick</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>
    </>
  );
};

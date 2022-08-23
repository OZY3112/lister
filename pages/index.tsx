import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Note from "../components/Note";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [note, setNote] = useState([]);
  // const [showChild, setShowChild] = useState(false);
  // useEffect(() => setShowChild(true), []);
  // if (!showChild) return null;

  // if (typeof window === "undefined") return <></>;
  // else
    return (
      <div className="bg-bg">
        <Head>
          <title>listers</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="flex w-screen">
          <Sidebar setNote={setNote} note={note} />
          <Note />
        </section>
      </div>
    );
};

export default Home;

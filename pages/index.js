import Head from "next/head";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen">
        <div className="m-auto">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
            style={{ height: "300px", width: "300px" }}
          >
            <Controls
              visible={true}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </main>
    </div>
  );
}

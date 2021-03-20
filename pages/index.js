import Head from "next/head";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen">
        <div className="m-auto">
          <div className="flex space-x-6">
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_atjj0tgb.json"
              style={{ height: "400px", width: "400px" }}
            ></Player>
            <div className="h-auto m-auto space-y-3">
              <h1 className="text-5xl font-semibold">We are launching soon!</h1>
              <h4 className="text-2xl">© {new Date().getFullYear()} Factorial</h4>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

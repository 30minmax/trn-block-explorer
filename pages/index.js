import Head from "next/head";
import BlocksWidget from "../components/blocksWidget";
import TransfersWidget from "../components/transfersWidget";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="overflow-hidden lg:pb-32 xl:pb-36 ">
        <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-5">
            <BlocksWidget />
            <TransfersWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

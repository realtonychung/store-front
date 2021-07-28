import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head></Head>
      <h1>Test Token Minting Page</h1>

      <Link href="mint">
        <button>Go to Mint Page</button>
      </Link>
    </>
  );
}

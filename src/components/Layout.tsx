import React from "react";
import Head from "next/head";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Art institute - Exhibitions list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <header className="bg-stone-500 py-[12px] px-[19px] mb-[15px] md:mb-[45px]">
          <h2 className="text-3xl md:text-5xl text-white">
            <Link href="/">Exhibitions!</Link>
          </h2>
        </header>
        <div className="container mx-auto px-[15px] md:px-0 h-full">
          {children}
        </div>
      </main>
    </>
  );
}

export default Layout;

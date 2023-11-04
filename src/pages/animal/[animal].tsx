import { AnimalGridFiltered } from "@/components/AnimalGridFiltered";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";

export default function AnimalDetail() {
  return (
    <>
      <Head>
        <title>Dog Breed - Schutz</title>
        <meta
          name="description"
          content="This is the meta description for My Page"
        />
      </Head>
      <div className="dark:bg-darkMode">
        <Header />
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <h1 className="font-bold text-3xl dark:text-white">
            Dog breed - Schutz
          </h1>

          <section className="mt-10">
            <AnimalGridFiltered />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

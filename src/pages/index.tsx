import { Header } from "@/components/Header";
import { SearchAnimal } from "@/components/SearchAnimal";
import { AnimalGrid } from "@/components/AnimalGrid";
import { Footer } from "@/components/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Adopt a Pet Or Sell - Find Your Perfect Companion</title>
        <meta
          name="description"
          content="This is the meta description for My Page"
        />
      </Head>

      <div className="dark:bg-darkMode">
        <Header />
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl sm:py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Every Pet Deserves a Loving Home.{" "}
                <b className="text-[#FFBD59]">Adopt</b> a Pet Today
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                Browse our available animals and learn more about the adoption
                process. Together, we can rescue, rehabilitate, and rehome pets
                in need. Thank you for supporting our mission to bring joy to
                families through pet adoption.
              </p>
            </div>

            <div className="mb-10">
              <SearchAnimal />
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <section>
            <AnimalGrid />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

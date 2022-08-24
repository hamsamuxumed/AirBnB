import type { GetStaticProps } from "next";
import { CardsDataType, ExploreDataType } from "../typings";
import Head from "next/head";
import {
  Header,
  Banner,
  SmartCard,
  AnywhereCard,
  LargeCard,
  Footer,
} from "../components";

interface Props {
  exploreData: ExploreDataType[];
  cardsData: CardsDataType[];
}

const Home = ({ exploreData, cardsData }: Props) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* First section after Banner - Pull data from server */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmartCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
          {/* Section section after Banner */}
          <section>
            <h2 className="text-4xl font-semibold py-8 pb-5">Live Anywhere</h2>

            <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
              {cardsData?.map((item) => (
                <AnywhereCard
                  key={item.img}
                  img={item.img}
                  title={item.title}
                />
              ))}
            </div>
          </section>

          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then((resp) => resp.json())
    .catch((err) => err.message);

  const cardsData = await fetch("https://links.papareact.com/zp1")
    .then((resp) => resp.json())
    .catch((err) => err.message);

  return {
    // errors - return word "props" need to be small cased
    props: {
      exploreData,
      cardsData,
    },
  };
};

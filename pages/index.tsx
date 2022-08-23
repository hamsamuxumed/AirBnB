import type { NextPage } from "next";
import Head from "next/head";
import {
  Header,
  Banner,
  SmartCard,
  AnywhereCard,
  LargeCard,
} from "../components";

// interface Props {
//   exploreData: [];
//   cardsData: [];
// }

interface fetchDataTypes {
  title: string;
  location: string;
  img: string;
  distance: string;
  buttonTest: string;
}

const Home: NextPage = ({ exploreData, cardsData }) => {
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
            {exploreData?.map((item: fetchDataTypes) => (
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
              {cardsData?.map((item: fetchDataTypes) => (
                <AnywhereCard
                  key={item.img}
                  img={item.img}
                  title={item.title}
                />
              ))}
            </div>
          </section>

          <section>
            <div className="">
              <LargeCard
                img="https://links.papareact.com/4cj"
                title="The Greatest Outdoors"
                description="Wishlists curated by Airbnb"
                buttonText="Get Inspired"
              />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
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
}

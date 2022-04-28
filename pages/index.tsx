import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const Home: NextPage = ({exploreData, cardsData}) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        {/* explore nearby section */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull data from a server -api */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map(item => (
              <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
            ))}
          </div>

        </section>

        {/* live anywhere section */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          {/* Pull data about this section */}
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData.map(item => (
            <MediumCard key={item.img} img={item.img} title={item.title} />
          ))}
          </div>
        </section>

        {/* large card section */}
        <section>
            <LargeCard
              img="https://links.papareact.com/4cj"
              title="The Greatest Outdoors"
              description="The Greatest curated by Airbnb." 
              buttonText="Get Inspired"
             />
        </section>

      </main>
        {/* footer section */}
        <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res=> res.json());

  const cardsData = await fetch('https://links.papareact.com/zp1').then(res =>res.json())
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
export default Home

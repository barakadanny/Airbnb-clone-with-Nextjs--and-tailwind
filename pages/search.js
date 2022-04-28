import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import format from 'date-fns/format'
import InfoCard from '../components/infoCard'
import { useState } from 'react'

function Search({ searchResults }) {
  const router = useRouter()

  // here we are distracturing what is inside the url we received frm the search bar
  const { location, startDate, enDate, noOfGuests } = router.query

  //   const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  //   const formattedendDate = format(new Date(enDate), 'dd-MMMM-yy')
  //   const range = `${formattedStartDate} - ${formattedendDate}`

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ stays from- {startDate}- for {noOfGuests} Guests
          </p>
          <h1 className="mt-2 mb-6 text-2xl font-semibold">
            Stays in {location}
          </h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            {/* the button class is a custom css created in styles/globals.css */}
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}

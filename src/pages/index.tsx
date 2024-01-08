import { signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useState } from "react";
import Banner from "../components/Banner";
import CarouselTitlesCard from "../components/CarouselTitlesCard";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import SmallCard from "../components/SmallCard";
import { ICity, ITravelStyle } from "../types/typings";
import Desc from "@/components/Desc";
import Second from "@/components/Second";
import Testi from "@/components/Testi";
import Pic from "@/components/Pic";
import { GetServerSidePropsContext } from "next";
import axios from "axios";

import traveldisc from "../../public/get-inspired1200x600.jpg";
import MainLayout from "@/components/MainLayout";
import OurPrograms from "@/components/ourprograms";
import Join from "@/components/Join";

type Props = {
  citiesData: {results:ICity[]};
  stylesData: {results:ITravelStyle[]};
  getInspiredCities: ICity[];
};

const Home = ({ citiesData, stylesData, getInspiredCities }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null);

  
  const [fname, setFname] = useState("");  
  const [lname, setLname] = useState("");  
  const [email, setEmail] = useState("");  
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState(false);


  const sendMail = async () => {

    setMail(true);
    
    let url = process.env.NEXT_PUBLIC_API_URL;

    await axios.post(url+`/post-travel-style`, {fname:fname,lname:lname,email:email,phone:phone,company:company,message:message,}).then(() => {
            setFname("");
            setLname("");
            setEmail("");
            setPhone("");
            setCompany("");
            setMessage("");
            setMail(false)
        }).catch(() => {
            setMail(false);
        }).finally(() => {
          setMail(false);
        })
  };

  return (
    <MainLayout>
        
        {/* Banner */}
        <Banner
          getInspiredCities={getInspiredCities}
          setSearchInput={setSearchInput}
          setSelectedCity={setSelectedCity}
        />

        <OurPrograms/>

        <Join/>
        {/* <Desc
          getInspiredCities={citiesData}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          isOpen={isOpen}
          setIsOpen={setIsOpen} /> */}

        <main className="max-w-full mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <div className="max-w-2xl mx-auto mt-16 mb-16 text-center" id="destinations">
              <span className="font-bold tracking-wider uppercase dark:text-violet-400  items-center justify-items-center "></span>
              <h2 className="text-4xl font-bold lg:text-5xl  items-center justify-items-center ">Popular Cities</h2>
            </div>
            {/* Map Canadian cities */}
            <div className="grid grid-cols-2 items-center justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {citiesData.results.map((city) => (
                <SmallCard
                  key={city.url}
                  cityData={city}
                  setSearchInput={setSearchInput}
                  setSelectedCity={setSelectedCity}
                />
              ))}
            </div>
          </section>

          <Second />

          <section>
            <div className="max-w-2xl mx-auto mt-16 mb-16 text-center">
              <span className="font-bold tracking-wider uppercase dark:text-violet-400"></span>
              <h2 className="text-4xl font-bold lg:text-5xl">Find your travel style</h2>
            </div>
            {/* Map styles data from api */}
            <CarouselTitlesCard travelStyles={stylesData} />
            {/* Travel Styles Carousel */}
          </section>

          <Testi />

          <section className="py-6 dark:text-gray-50">
            <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
              <img src="/34.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
              <img src="/35.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
              <img src="/37.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
              <img src="/pg2-2.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
              <img src="/36.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
            </div>
          </section>

          <LargeCard
            img={traveldisc}
            title="Discover New Destinations"
            description="Curated by our Travel Experts"
            buttonText="Get Inspired"
            getInspiredCities={getInspiredCities}
            setSearchInput={setSearchInput}
            setSelectedCity={setSelectedCity}
          />

          <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Reserve your spot today!
                </h2>

                <p className="hidden text-gray-500 md:mt-4 md:block">
                  Travel allows us to enjoy complete anonymity in new and unexplored territories.
                  It gives us absolute freedom to live in the moment and it allows us to be anyone,
                  to go anywhere and to do anything. The best part of my six-month trip around the world,
                  way back when, was the freedom of being able to just wake up and pick a spot anywhere on the map and
                  find a way to get there. Travel enables us to be spontaneous and seek new experiences.
                </p>

                <div className="mt-4 md:mt-8">
                  <Link href="#" className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400" >
                    Book Today
                  </Link>
                </div>
              </div>
            </div>

            <img
              alt="Student"
              src="/21.jpg"
              className="h-56 w-full object-cover sm:h-full"
            />
          </section>

          <section id="contact" className="py-24 lg:py-36 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap -m-8">
                <div className="w-full md:w-1/2 p-8">
                  <div className="md:max-w-md">
                    <div className="flex items-center justify-center mb-8 w-20 h-20 rounded-xl" style={{ background: "#000000", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2077 3.19551C13.9184 0.268161 18.0816 0.268162 18.7923 3.19552C19.2514 5.08655 21.4179 5.98396 23.0797 4.97142C25.6522 3.40398 28.596 6.34784 27.0286 8.92031C26.016 10.5821 26.9135 12.7486 28.8045 13.2077C31.7318 13.9184 31.7318 18.0816 28.8045 18.7923C26.9135 19.2514 26.016 21.4179 27.0286 23.0797C28.596 25.6522 25.6522 28.596 23.0797 27.0286C21.4179 26.016 19.2514 26.9135 18.7923 28.8045C18.0816 31.7318 13.9184 31.7318 13.2077 28.8045C12.7486 26.9135 10.5821 26.016 8.92031 27.0286C6.34784 28.596 3.40398 25.6522 4.97142 23.0797C5.98396 21.4179 5.08655 19.2514 3.19552 18.7923C0.268162 18.0816 0.268161 13.9184 3.19551 13.2077C5.08655 12.7486 5.98396 10.5821 4.97142 8.92031C3.40398 6.34784 6.34784 3.40398 8.92031 4.97141C10.5821 5.98396 12.7486 5.08655 13.2077 3.19551Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <h3 className="mb-6 text-3xl font-semibold" style={{ letterSpacing: "-0.5px" }}>&ldquo;At HobbyHorse we'll help you plan your trip effectively&amp; productively. Ensuring that you have a seamless holiday even as you travel with us touring all the places of interest !&rdquo;</h3>
                    <h4 className="font-semibold tracking-tight mb-1">Sharon Akinyi</h4>
                    <span>Founder, HobbyHorse.</span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="fname" type="text" placeholder="First Name" />
                      </label>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="lname" type="text" placeholder="Last Name" />
                      </label>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="email" type="text" placeholder="Email Address" />
                      </label>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="phone" type="text" placeholder="Phone Number" />
                      </label>
                    </div>
                    <div className="w-full p-3">
                      <label className="block">
                        <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="company" type="text" placeholder="Company (Optional)" />
                      </label>
                    </div>
                    <div className="w-full p-3">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        <textarea className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="message"  placeholder="Leave a message..."></textarea>
                      </label>
                    </div>
                    <div className="w-full p-3">
                      <button className="inline-block mb-4 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" disabled={mail} onClick={sendMail}>Send Enquiry</button>
                      <span className="text-sm text-gray-600 tracking-tight">* We never share user details with third parties, period.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
    </MainLayout>
  );
};

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {

  let url = process.env.NEXT_PUBLIC_API_URL;

  const citiesData =  await fetch(url+`/get-city`).then( (res) => res.json() );

  const stylesData = await fetch(url+`/get-travel-style`).then((res) => res.json());

  const getInspiredCities = await fetch(url+`/get-city`).then((res) => res.json());

  return {
    props: {
      citiesData,
      stylesData,
      getInspiredCities,
    },
  };
};

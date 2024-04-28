import React, { useRef, useState } from 'react';
import cook from '../Assets/cookingg-unscreen.gif'
import CardFeature from '../components/CardFeature';
import { useSelector } from 'react-redux';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import verify from '../Assets/verified-unscreen.gif';
import Contact from './Contact';
import Addtours from '../Page/AddTours';
import Cart from './Cart';
import AllTours from '../components/AllTours';


const Home = () => {
  const tourData = useSelector((state) => state.tour.tourList);
  console.log(tourData);
  const categoriesToInclude = ["Chicken", "Vegan", "Seafood", "Cakes  "];
  const hometourCartListTop = tourData.filter(el => categoriesToInclude.includes(el.category));
  console.log(hometourCartListTop);
  const slicetourRef = useRef()
  const [showThanks, setShowThanks] = useState(false);
  const nexttour = () => {
    slicetourRef.current.scrollLeft += 400

  }
  const prevetour = () => {
    slicetourRef.current.scrollLeft -= 400

  };
  const handleSubscribe = () =>{
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 3000);

  }





  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-3'>

        <div className='md:w-1/2'>
          <div className='flex gap-2 bg-yellow-200 w-33 px-2 items-center rounded-full'>
          </div><br />
          <h2 className='text-4xl font-bold md:text-6xl'>Discover India's Hidden Gems:<br />  Uncovering    <span className='text-blue-500'>Rare and Remarkable Destinations with us</span> </h2>
          <p className='py-4 text-base'>During my travels through India's rare and stunning destinations, I had the privilege of discovering a secluded village nestled amidst the Western Ghats. The warm hospitality of the locals, coupled with breathtaking landscapes of tea plantations and misty mountains, created a mesmerizing and unforgettable experience.
</p> <p>
I'd like to express my gratitude to Journey Junction website for inspiring me to explore India's rare and beautiful destinations, leading me to discover hidden gems and create unforgettable memories during my travels. </p>
          <button onClick={handleSubscribe} className='font-bold bg-blue-600 text-slate-200 px-4 py-2 rounded-md'>Subscribe</button>
        </div>

        <div className='w-1/2 flex justify-end'>
          <img src={cook} className='max-w-full h-auto rounded-md' alt='food' />
        </div>

      </div>


      {showThanks && (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-0">
    <div className="bg-white p-5 rounded-md">
      <img src={verify} className="mx-auto mb-4" alt="verified" /> {/* GIF inside the card */}
      <h2 className="text-2xl font-bold mb-4 items-center justify-center">Thank You for Subscribing!</h2>
      <p className="text-lg items-center justify-center">We're excited to have you join our community.</p>
    </div>
  </div>
)}

      {/* next section */}

{/*  */}















<Contact/>
    <div>
    </div>
    </div>

   


  );
};

export default Home;

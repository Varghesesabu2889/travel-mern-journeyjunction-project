import React, { useRef, useState } from 'react';
import tour from '../Assets/tour-unscreen.gif'
// import CardFeature from '../components/CardFeature';
import { useSelector } from 'react-redux';
// import { GrPrevious } from "react-icons/gr";
// import { GrNext } from "react-icons/gr";
import verify from '../Assets/verified-unscreen.gif';
import Contact from './Contact';
import Modal from '../components/Modal';
// import Modal from '../components/Modal';


const Home = () => {
  const tourData = useSelector((state) => state.tour.tourList);
  console.log(tourData);
  const categoriesToInclude = ["Chicken", "Vegan", "Seafood", "Cakes  "];
  const hometourCartListTop = tourData.filter(el => categoriesToInclude.includes(el.category));
  console.log(hometourCartListTop);
  // const slicetourRef = useRef()
  const [showThanks, setShowThanks] = useState(false);


  // const homeProductCartListTop = tourData.filter(el => categoriesToInclude.includes(el.category));
  // console.log(homeProductCartListTop);
  // const slideProductRef = useRef()
  // const nexttour = () => {
  //   slicetourRef.current.scrollLeft += 400

  // }
  // const prevetour = () => {
  //   slicetourRef.current.scrollLeft -= 400

  // };

  






  return (
    
    <div className='p-2 md:p-4'>
      <Modal/>
      <div className='md:flex gap-4 py-3'>

        <div className='md:w-1/2'>
          <div className='flex gap-2 bg-yellow-200 w-33 px-2 items-center rounded-full'>
          </div><br />
          <h2 className='text-4xl font-bold md:text-5xl'>Discover India's Hidden Gems:  Uncovering     <span className='text-blue-500'>Rare and Remarkable Destinations with us</span> </h2>
          <p className='py-4 text-base'>During my travels through India's rare and stunning destinations, I had the privilege of discovering a secluded village nestled amidst the Western Ghats. The warm hospitality of the locals, coupled with breathtaking landscapes of tea plantations and misty mountains, created a mesmerizing and unforgettable experience.
</p> <p>
I'd like to express my gratitude to Journey Junction website for inspiring me to explore India's rare and beautiful destinations, leading me to discover hidden gems and create unforgettable memories during my travels. </p>
        </div>

        <div className='w-1/2 flex justify-end'>
          <img src={tour} className='max-w-full h-auto rounded-md' alt='food' />
        </div>

      </div>




      {/* next section */}
    

      {/* <div className=''>
        <div className='flex w-full items-center'>
          <h1 className='font-bold text-2xl py-3 mb-4'>Top rated tours 
          </h1 >
          <div className='ml-auto flex gap-4'>
            <button onClick={prevetour} className='bg-yellow-300 hover:bg-yellow-400 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nexttour} className='bg-yellow-300 hover:bg-yellow-400 text-lg p-1 rounded'><GrNext /></button>
          </div>
        </div>
        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
          {
            homeProductCartListTop.map(el => {
              return (
                <CardFeature
                  key={el._id}
                  name={el.name}
                  image={el.image}
                  price={el.price}
                />
              )
            })
          }

</div>
</div> */}
















<Contact/>
    <div>
    </div>
    </div>

   


  );
};

export default Home;

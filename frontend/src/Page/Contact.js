import React from 'react'
import logo from '../Assets/logoss.png'
const Contact = () => {
  return (
    <div>
      <footer class="bg-white-300 text-black-300 py-12 rounded">
    <div class="container mx-auto flex flex-wrap justify-between">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <img src={logo} width={"250px"} height={"150px"}/>
            <p>Welcome to Journey Junction where we're passionate about making your travel
               dreams a reality! Our mission is to empower travelers with tools for seamless trip planning and
                unforgettable experiences. Whether you're solo, with friends, or family, we're here to support
                 your journey. Let's explore and create lasting memories together!</p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <h2 class="text-lg font-semibold mb-4">Stay Connected</h2>
            <p>Join our community of food lovers on social media. Share your creations, get inspired, and connect with fellow trips.</p>
            <div class="mt-4">
                
            </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <h2 class="text-lg font-semibold mb-4">Newsletter</h2>
            <p>Subscribe to our newsletter for the latest notifications,trip booking, and exclusive offers of trips</p>
            <form class="mt-4">
                <input type="email" placeholder="Your Email Address" class="bg-gray-700 text-gray-300 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                <button type="submit" class="bg-blue-500 text-gray-900 py-2 px-6 rounded-full mt-2 hover:bg-yellow-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500">Subscribe</button>
            </form>
        </div>
    </div>
    <div class="text-center mt-8">
        <p>&copy; 2024 Recipes. All rights reserved.</p>
    </div>
</footer>

    </div>
  )
}

export default Contact
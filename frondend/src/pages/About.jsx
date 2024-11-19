import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
 

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>forever was born out of a passion for innovation and a desire to revolutionize the way people shop online.. We’re here to revolutionize your online shopping experience with seamless technology, personalized recommendations, and a platform designed to inspire. Discover a world where shopping feels effortless, exciting, and uniquely yours.</p>
          <p>Forever was born out of a passion for creating something extraordinary—a space where technology meets creativity to transform the way people shop online. With every click, swipe, and tap, we aim to deliver more than just products; we deliver experiences. From curated collections to advanced tools that adapt to your preferences, Forever is where the future of shopping begins.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to revolutionize the way people shop online by combining innovation, creativity, and a customer-first approach. We strive to create a seamless and personalized shopping experience that inspires and empowers every individual.</p>
        </div>
      </div>

      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-frinendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals className='text-gray-600' is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

       <NewsletterBox/>

    </div>
  )
}

export default About
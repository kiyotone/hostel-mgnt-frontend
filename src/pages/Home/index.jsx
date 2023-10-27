import Swiper from './Swiper'
import Hero from '../../components/Hero/index'
import Footer from '../../components/Footer'
import Accordion from './FaqSection/Accordion'
import { getDataWithoutHeader } from '../../services/axios.service'
import { useEffect, useState } from 'react'
import BottomNav from '../../components/Navbar/BottomNav'


const Home = () => {
  const [accordions, setAccordions] = useState([]);

  const getApiFaqData = async () => {
    const response = await getDataWithoutHeader("faqs");

    const datas = response.faqs.map((data) => {
      return { ...data, isOpen: false };
    });
    console.log(datas)
    setAccordions(datas);
  };

  useEffect(()=>{
    getApiFaqData()
  },[])
  const toggleAccordion = (accordionId) => {
    console.log(accordionId)
    if (accordions) {
      setAccordions((prevAccordions) =>
      prevAccordions.map((accordion) => ({
        ...accordion,
        isOpen: accordion._id === accordionId ? !accordion.isOpen : false,
        }))
    );   
    }
  };
  return (
    <div className='bg-white text-black pb-20'>
       <BottomNav/>
       <Hero />
        <div className='pl-20 pt-[7rem] text-[2rem] font-semibold'>
          <h1 className='ms-20 text-3xl'>
            Trending Now
          </h1>
        </div>
        <Swiper />


        <div className='px-20'>
        {accordions &&
          <section className="ms-20">
          <h1 className=' text-3xl my-10 font-semibold'>Frequently Asked Questions</h1>
          {accordions.map((accordion) => (
            <Accordion
              key={accordion._id}
              title={accordion.question}
              content={accordion.answer}
              isOpen={accordion.isOpen}
              onClick={() => toggleAccordion(accordion._id)}
            />
          ))}
        </section>
      }
        </div>
      
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Home
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigation, Pagination ,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Categories.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

export default function Categories(){
  const getCategories=async ()=>{
         const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=14`);
         return data;
  }

 const{data,isLoading} =useQuery('web_categories',getCategories);

 if(isLoading){
  return <p>...loading</p>
 }

  return(
    
    <div className='container'>
      <div className='swiper-custom-pagination'></div>
       <Swiper
        modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={10}
      slidesPerView={7}
      navigation
      loop={true}
      autoplay={{
        delay:3000
      }}
      
      pagination={{ clickable: true,
      el:'.swiper-custom-pagination' }}
      // onSlideChange={() => }
      // onSwiper={(swiper) => }
       >
       {data?.categories.length?data?.categories.map((category)=>
      <SwiperSlide key={category._id}>
        
        <div className='category'>
          <Link to={`/products/category/${category._id}`}>
        <img src={category.image.secure_url}/>
        </Link>
        </div>
       
      </SwiperSlide>
     ):<h2>no category found</h2>}
    </Swiper>
    </div>
  
  ) }
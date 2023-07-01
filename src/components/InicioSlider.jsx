import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./InicioSlider.css";

// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";

import {get} from "../utils/httpCliente.js"
import { useState, useEffect } from "react"

export const  InicioSlider = () => {

  const [peliculasAct,setPeliculasAct] = useState([])

  

  useEffect(()=>{
    get("/movie/now_playing").then((data)=>{
        setPeliculasAct(data.results);
    })
    },[])

    return (
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
            {peliculasAct.map(peliculaAct => (
              <SwiperSlide key={peliculaAct.id} className="container-swiper swiper-slide2" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${peliculaAct.backdrop_path})` }}>
                <div className="content grid md:grid-cols-2 lg:grid-cols-3 place-items-center">
                  {/* <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w1280/${peliculaAct.poster_path}`} alt={peliculaAct.title} className="poster-image"/>
                  </div> */}
                  <div className="title-text-container">
                    <div className="title" data-swiper-parallax="-300">
                      {peliculaAct.title}
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                      <p>{peliculaAct.overview.substring(0, 100)}...</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </>
    );
  }
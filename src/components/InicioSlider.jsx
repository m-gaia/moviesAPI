import { Swiper, SwiperSlide } from "swiper/react";
// import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";



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
            <div className="content grid md:grid-cols-12 place-items-center justify-center">
              {/* Col 1 to Col 8 */}
              <div className="col-span-8">
                <div className="title-text-container">
                <div className="rating text-base flex items-center" data-swiper-parallax="-300">
                    <IoIosStar className="text-yellow mr-1" />
                    <span>Rating {Number(peliculaAct.vote_average || "6.5").toFixed(1)}</span>
                  </div>
                  <div className="title" data-swiper-parallax="-300">
                    {peliculaAct.title}
                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p>{peliculaAct.overview.substring(0, 100)}...</p>
                  </div>
                  <button className="bg-white hover:bg-yellow text-black py-1 px-8 mt-8 rounded-lg btn-slider">Ver Más &gt;</button>
                </div>
              </div>
              {/* Col 9 to Col 12 */}
              <div className="col-span-4 md:col-span-3">
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${peliculaAct.poster_path}`}
                  alt={peliculaAct.title}
                  className="poster-image"
                />
              </div>
            </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </>
    );
  }
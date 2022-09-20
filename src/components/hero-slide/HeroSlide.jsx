import React, { useState, useEffect } from 'react';
import SwiperCore, { Autoplay, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import tmdbApi, { movieType } from '../../api/tmdbApi';
import HeroSlideItem from '../hero-slideItem/HeroSlideItem';
import TrailerModal from '../trailer-modal/TrailerModal';

import './hero-slide.scss';

const HeroSlide = () => {
  SwiperCore.use([Autoplay, Pagination]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 6));
        // console.log(response);
      } catch {
        console.log('error');
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        effect={'coverflow'}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? 'active' : ''}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
};

export default HeroSlide;

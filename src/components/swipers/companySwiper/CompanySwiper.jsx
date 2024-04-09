import cl from './CompanySwiper.module.css'
import img_1 from '../../../img/swipers/about_swiper_1.jpg'
import img_2 from '../../../img/swipers/about_swiper_2.jpg'
import img_3 from '../../../img/swipers/about_swiper_3.jpg'



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Важные изночальные стили
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';



// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

export default function CompanySwiper({pagination_state}) {
    //Кастомные стрелки с помощью ref инициальизцация
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);
    if(pagination_state==undefined) pagination_state=false;

    return (
        <>
            <Swiper
                //Все параметры
                //Изначальное количество слайдов
                slidesPerView={1}
                //Растояние между
                spaceBetween={30}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                //Скорость
                speed={700}
                loop={true}
                //Эффект как строка
                // effect={'fade'}
                pagination={pagination_state}
                // Вертикально
                // direction={'vertical'}
                // Навигация
                // navigation={true}
                //Импортировать все модули
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                //Базовый класс
                className={cl.swiper}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                    swiper.params.navigation.nextEl = swiperNavNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                <SwiperSlide className={cl.swiperSlide}><img className={cl.img} src={img_1} /></SwiperSlide>
                <SwiperSlide className={cl.swiperSlide}><img className={cl.img} src={img_2} /></SwiperSlide>
                <SwiperSlide className={cl.swiperSlide}><img className={cl.img} src={img_3} /></SwiperSlide>
                {/* Кастомные стрекли применение */}
                <div className={cl.swiperNavPrev} ref={swiperNavPrevRef}></div>
                <div className={cl.swiperNavNext} ref={swiperNavNextRef}></div>
            </Swiper>
        </>
    );
}

export { CompanySwiper }
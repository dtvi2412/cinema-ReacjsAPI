import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import ani from '../../AosAnimation';
const CarouselHome = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectIndex, e) => {
    setIndex(selectIndex);
  };
  const changeBG = useSelector((state) => state.CourseReducer.check);
  const imgItem = useSelector((state) => state.CourseReducer.courses);

  const [randoms, setRandoms] = useState('');
  const rd = Math.floor(Math.random() * imgItem.length);
  // useEffect(() => {
  //   return ani(5000);
  // }, []);
  useEffect(() => {
    setRandoms(rd);

    return () => setRandoms(rd);
  }, []);

  const [bgClipPath, setBgClipPath] = useState(true);
  const handldebgClipPath = () => {
    setBgClipPath(!bgClipPath);
    localStorage.setItem('bgClipBack', bgClipPath);
  };
  const handleCarousel = () => {
    return imgItem.slice(randoms, randoms + 3).map((item, index) => {
      return (
        <Carousel.Item key={index} className="carousel__item">
          <img
            src={item.hinhAnh}
            alt={item.hinhAnh}
            className="carousel__img"
          />{' '}
          <Carousel.Caption>
            {' '}
            {/* <div className="fade-carousel" /> */}
            {/* <div className={`${changeBG ? "fade-carousel1" : "fadeBG"}`} /> */}
            <h3 className="carousel__text">{item.tenPhim}</h3>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };
  return (
    <div className="carousel">
      {' '}
      <Carousel
        activeIndex={index}
        fade={true}
        onSelect={handleSelect}
        data-aos="flip-down"
      >
        {handleCarousel()}
      </Carousel>
    </div>
  );
};

export default CarouselHome;

import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";
import CatCard from "../catCard/CatCard";
import { cards } from "../..//data";

// we use npm package react-carousel

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={5} arrowsScroll={5}>
          {cards.map((card) => (
            <CatCard item={card} key={card.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

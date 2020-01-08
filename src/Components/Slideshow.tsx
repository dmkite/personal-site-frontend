import React, { useState } from "react";

interface ISlideshowProps {
  images: string[];
}

const Slideshow = (props: ISlideshowProps): JSX.Element => {
  const [currentIndex, changeIndex] = useState<number>(0);

  const changeImage = (moveBy: number): void => {
    const newIndex: number = currentIndex + moveBy < 0
      ? props.images.length - 1
      : currentIndex + moveBy;
    changeIndex(newIndex);
  };

  return (
    <div className="slideshow">
      <button onClick={() => changeImage(-1)}></button>
      <img src={props.images[currentIndex]} alt="Dylan Kite design work"/>
        <section>
          {props.images.map((img: string, i: number): JSX.Element => (
            <div key={i} className={`circles ${i === currentIndex ? "filled" : null}`}/>
          )
          )}
        </section>
        <button onClick={() => changeImage(-1)}>></button>
    </div>
      );
    };

export default Slideshow;

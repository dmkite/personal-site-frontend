import React, { useState } from "react";

interface ISlideshowProps {
  images: string[];
}

const Slideshow = (props: ISlideshowProps): JSX.Element => {
  const [currentIndex, changeIndex] = useState<number>(0);

  const changeImage = (moveBy: number): void => {
    const changedIndex: number = currentIndex + moveBy
    const imgListLength: number = props.images.length - 1
    changedIndex > imgListLength && changeIndex(0)
    changedIndex < 0 && changeIndex(imgListLength)
    changedIndex >= 0 && changedIndex <= imgListLength && changeIndex(changedIndex)
  };
  
  return (
    <div className="slideshow">
      <button dangerouslySetInnerHTML={{ __html: '&#8249'}} onClick={() => changeImage(-1)}/>
      <img src={props.images[currentIndex]} alt="Dylan Kite design work"/>
        <section>
          {props.images.map((img: string, i: number): JSX.Element => (
            <div key={i} className={`circles ${i === currentIndex ? "filled" : null}`}/>
          )
          )}
        </section>
        <button dangerouslySetInnerHTML={{ __html: '&#8250'}} onClick={() => changeImage(1)} />
    </div>
      );
    };

export default Slideshow;

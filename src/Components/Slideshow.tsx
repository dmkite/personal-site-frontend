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
  const images: string[] = [
    "https://dylankite.com/assets/design/signin.gif",
    "https://dylankite.com/assets/design/attendance.gif",
    "https://dylankite.com/assets/design/accounts.gif",
    "https://dylankite.com/assets/design/enrollment.gif"
  ]
  return (
    <div className="slideshow">
      <button onClick={() => changeImage(-1)}></button>
      <img src={props.images[currentIndex]} alt="Dylan Kite design work"/>
        <section>
          {images.map((img: string, i: number): JSX.Element => (
            <div key={i} className={`circles ${i === currentIndex ? "filled" : null}`}/>
          )
          )}
        </section>
        <button onClick={() => changeImage(1)}>></button>
    </div>
      );
    };

export default Slideshow;

import React from "react";
import "../App.css";
import { IModalProps } from "./Modal";

const Thumbnail = (props: IModalProps): JSX.Element => {
  const {galleryItem: {thumbnail, title}} = props;

  return (
    <div className="thumbnail"
      onClick={() => props.select(props.galleryItem)}>
      <img src={thumbnail} alt={title} />
    </div>
  );
};

export default Thumbnail;

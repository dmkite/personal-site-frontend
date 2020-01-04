import useAxios from "axios-hooks";
import React, { Fragment, useState } from "react";
import Loading from "../Components/Loading";
import config from "../config";
import Modal from "./Modal";
import Thumbnail from "./Thumbnail";

export interface IGalleryItem {
  id: string;
  title: string;
  desc: string;
  height: number;
  width: number;
  image: string;
  thumbnail: string;
}

const Gallery = (): JSX.Element => {
  const [selected, select] = useState<IGalleryItem | null>(null);
  const [{
    data,
    loading,
    error
  }] = useAxios(`${config.serverUrl}/api/gallery`);

  const staticContent = <Fragment>
    <h1>Gallery</h1>
    <p>
      Perhaps better described as analog graphic design than art, my body of
      work is a dichotomous interplay between radiant, flamboyant technicolor
      and flat monochrome. In each work splashes of color hint at a beautiful
      reality beyond our own, igniting our primordial need to escape monotony.
    </p>
  </Fragment>;

  if (loading) { return (<Fragment>
    {staticContent}
    <Loading />
  </Fragment>);
  }

  if (error) { return <p>{JSON.stringify(error)}</p>; }

  const transformedData: IGalleryItem[] = Object.keys(data)
    .reduce((acc: IGalleryItem[], id: string): IGalleryItem[] => {
      acc.push(data[id]);
      return acc;
    }, []);

  return (
    <Fragment>
      {staticContent}
      <div className="gallery">
        {transformedData.map((d: IGalleryItem, i: number): JSX.Element => {
          return <Thumbnail key={i} galleryItem={d} select={select} />;
        }
        )}
      </div>

      {selected && <Modal galleryItem={selected} select={select} />}
    </Fragment>
  );
};

export default Gallery;

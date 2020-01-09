import useAxios from "axios-hooks";
import React, { Fragment } from "react";
import config from "../config";
import Loading from "./Loading";
import Slideshow from "./Slideshow";

interface IDesignItem {
  id: string;
  title: string;
  desc: string;
  impact: string;
  images: string[];
}
const Design = (): JSX.Element => {
    config.serverUrl = 'https://dylankite.com'
  const [{ data, loading, error }] = useAxios(`${config.serverUrl}/api/design`);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.warn(error)
    return <p>Something went wrong. I promise I'm not a bad developer :[</p>;
  }

  return (
    <Fragment>
      <h1>Design</h1>
      {Object.keys(data).map((id: string, i: number): JSX.Element => {
        const designItem: IDesignItem = data[id];
        return (
          <div className="design-item" key={i}>
            <h2>{designItem.title}</h2>
            <Slideshow images={designItem.images} />
            <h3>Description</h3>
            <p>{designItem.desc}</p>
            <h3>Impact</h3>
            <p>{designItem.impact}</p>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Design;

import useAxios from "axios-hooks";
import React, {Fragment} from "react";
import config from "../config";
import Loading from "./Loading";
import Project, {IKeyVal} from "./Project";

interface IProjectData {
  specs: IKeyVal[];
  title: string;
  desc: IKeyVal[];
  svg: string;
}

const Development = (): JSX.Element => {
  const [{
    data,
    loading,
    error
  }] = useAxios(`${config.serverUrl}/api/projects`);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
    return <div>Something went wrong. I promise I'm not a bad developer :[</div>;
  }
  console.log(data)
  return (
    <Fragment>
      <h1>Development</h1>
      {Object.keys(data).map((id: string, i: number) => <Project key={i} {...data[id]}/>)}
    </Fragment>
  );
};

export default Development;

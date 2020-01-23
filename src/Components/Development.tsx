import useAxios from "axios-hooks";
import React, {Fragment} from "react";
import config from "../config";
import Loading from "./Loading";
import Project, {IProjectItem} from "./Project";

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
    console.error(error);
    return <p>Something went wrong. I promise I'm not a bad developer :[</p>;
  }

  const sortByOrder = (a:IProjectItem, b:IProjectItem): number => {
    return a.order  - b.order
  }

  const sortedProjects = Object.keys(data).reduce((acc: IProjectItem[], projectId: string, i:number): IProjectItem[] => {
    acc.push(data[projectId])
    return acc
  }, []).sort(sortByOrder)

  return (
    <Fragment>
      <h1>Development</h1>
      {sortedProjects.map((project: IProjectItem, i: number) => <Project key={i} {...project}/>)}
    </Fragment>
  );
};

export default Development;

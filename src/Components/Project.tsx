import React, { useState } from "react";
import { ReactComponent as Android } from "../assets/android.svg";
import { ReactComponent as IOS } from "../assets/iOS.svg";
import { ReactComponent as Web } from "../assets/web.svg";
import { ReactComponent as Windows } from "../assets/windows.svg";
import {FaGithub, FaDownload, FaExternalLinkSquareAlt} from 'react-icons/fa'

interface ISvgMapper {
  [key: string]: JSX.Element;
  android: JSX.Element;
  windows: JSX.Element;
  web: JSX.Element;
  ios: JSX.Element;
}

const svgMapper: ISvgMapper = {
  android: <Android className="svg" />,
  windows: <Windows className="svg" />,
  web: <Web className="svg" />,
  ios: <IOS className="svg" />
};

export interface IKeyVal {
  [key: string]: string | number;
}

export interface IProjectItem {
  id?: string;
  title: string;
  image: string;
  specs: {
    [key: string]: string | number | undefined
    units?: number
    framework: string
    platform: string
    persistence: string
  };
  desc: {
    Description: string
    Architecture: string
    Impact: string
  };
  order: number
  links?: {
    github?: string
    livelink?: string
    download?: string
  }
}

const Project = (props: IProjectItem): JSX.Element => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <section className="project-item">
      <h2>{props.title}</h2>
      <div className="specs">
        {svgMapper[props.image.toLowerCase()]}
        <div>
          {Object.keys(props.specs).map((k: string, i: number) => {
            let elipses: string = "";
            const val: string = String(props.specs[k]); // typecast for numbers
            while (elipses.length + k.length + val.length < 30) {
              elipses += ".";
            }
            return <p key={i}><b>{k}</b>{elipses}{val}</p>;
          })} 
          {props.links && props.links.github && <a className="resource-link" target="_blank" href={props.links.github}>
            <FaGithub size={20}/>
            </a>}
            {props.links && props.links.livelink && <a className="resource-link" target="_blank" href={props.links.github}>
            <FaExternalLinkSquareAlt size={20}/>
            </a>}
            {props.links && props.links.download && <a className="resource-link" href={props.links.download}>
            <FaDownload size={20}/>
            </a>}
          <button className="details-button" onClick={() => toggleOpen(!isOpen)}>{isOpen ? 'Less' : 'More'}</button>

        </div>
      </div>      <div className={`details ${isOpen ? "visible-details" : "hidden-details"}`}>
        <section>
          <h3>Description</h3>
          <p>{props.desc.Description}</p>
        </section>

        <section>
          <h3>Architecture</h3>
          <p>{props.desc.Architecture}</p>
        </section>

        <section>
          <h3>Impact</h3>
          <p>{props.desc.Impact}</p>
        </section>
      </div>
    </section>
  );
};

export default Project;

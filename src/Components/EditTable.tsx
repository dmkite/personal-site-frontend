import axios, { AxiosRequestConfig } from "axios";
import React, { Fragment, useEffect, useState } from "react";
import config from "../config";

interface IEditTableProps {
  edit: string;
}

interface IBannerContent {
  isError: boolean;
  message: string;
}

const EditTable = (props: IEditTableProps) => {
  const [content, setContent] = useState<any>([{}]);
  const [delModalShowing, changeDelModal] = useState<boolean>(false);
  const [bannerContent, setBannerContent] = useState<IBannerContent | null>(null);
  const [entryId, changeEntryId] = useState<string | null>(null);

  const getContent = async () => {
    try {
      const response = await axios.get(`${config.serverUrl}/api/${props.edit}`);
      const mapableContent = Object.keys(response.data).map((k: string) => {
        return response.data[k];
      });
      setContent(mapableContent);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getContent();
  }, [props.edit]);

  const handleDel = async (id: string | null) => {
    if (!id) { return; }
    try {
      const requestConfig: AxiosRequestConfig = {
        method: "delete",
        url: `${config.serverUrl}/api/${props.edit}`,
        headers: { Authorization: `Bearer ${localStorage.getItem("log-in-token")}` },
        data: { id }
      };
      await axios(requestConfig);
      delete content[id];
      setContent(content);
      setBannerContent({ isError: false, message: `Successfully deleted ${id}` });
    } catch (err) {
      console.log(err);
      setBannerContent({ isError: true, message: err });
    }
  };

  const handleDelBtnClick = (id: string) => {
    changeDelModal(true);
    changeEntryId(id);
  };

  return (
    <Fragment>
      <table className="admin-table">
        <thead>
          <tr>
            <td>ID</td>
            {Object.keys(content[0])
              .reduce((acc: JSX.Element[], k: string, i: number): JSX.Element[] => {
                k !== "id" && acc.push(<td key={i}>{k}</td>);
                return acc;
              }, [])
            }
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {content.map((c: any, i: number) =>
            <tr key={i}>
              <td>{c.id}</td>
              {Object.keys(c).reduce((acc: JSX.Element[], k: string, i: number): JSX.Element[] => {
                k !== "id" && acc.push(<td data-key={k} key={i}>{c[k]}</td>);
                return acc;
              }, [])}
              <td>
                <button onClick={() => handleDelBtnClick(c.id)} className="del" dangerouslySetInnerHTML={{ __html: "&#9003;" }} />
              </td>
              <td>
                <button className="edit" dangerouslySetInnerHTML={{ __html: "&#9999;" }} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {delModalShowing &&
        <div className="del-modal">
          <button onClick={() => handleDel(entryId)}>delete</button>
          <button onClick={() => changeDelModal(false)}>cancel</button>
        </div>}

      {bannerContent &&
        <div style={{ backgroundColor: bannerContent.isError ? "red" : "green" }}>
          {bannerContent.message}
          </div>}
    </Fragment>
  );
};

export default EditTable;

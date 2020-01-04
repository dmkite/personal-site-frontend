import React, { Fragment, useState } from "react";
import EditTable from "./EditTable";
const Admin: React.FC = (): JSX.Element => {
  const [editTableContent, setContent] = useState<string>("gallery");
  return (
    <Fragment>
      <header className="admin-header">
        <button onClick={() => setContent("gallery")}>Edit Gallery</button>
        <button onClick={() => setContent("projects")}>Edit Development</button>
        <button onClick={() => setContent("design")}>Edit Design</button>
        <button onClick={() => setContent("auth")}> Change Password</button>
      </header>
      <EditTable edit={editTableContent} />
    </Fragment>
  );
};

export default Admin;

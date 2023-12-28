import Button from "@mui/material/Button/Button";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fileApi } from "../services/fileService";
import "../CSS/Folder.css";
import folderPNG from "../PNG/folder.png";
import { folderApi } from "../services/folderService";

const Folder = () => {
  const navigate = useNavigate();
  const [folderId, setFolderId] = useState("0");
  const { data: folder } = fileApi.useFetchGetAllFileQuery("");
  const { data: file } = folderApi.useFetchGetOneQuery(folderId);
  const [folderVisible, setFolderVisible] = useState(false);

  function Visible(f: any) {
    setFolderId(f.id);
    setFolderVisible(true);
  }
  return (
    <div>
      <div className="button">
        <Link to={"/manager"}>
          <Button variant="outlined" size="large">
            manager
          </Button>
        </Link>
      </div>
      <div className="button">
        <Link to={"/folder"}>
          <Button variant="outlined" size="large">
            folder
          </Button>
        </Link>
        <Link to={"/listmanager"}>
          <Button variant="outlined" size="large">
            add manager
          </Button>
        </Link>
      </div>
      <div className="main_block">
        {folderVisible ? (
          <Button
            variant="outlined"
            size="large"
            onClick={() => setFolderVisible(false)}
          >
            Назад
          </Button>
        ) : (
          <div></div>
        )}
        <div className="box-folder">
          {folderVisible
            ? file?.map((f: any) => (
                <div className="folder">
                  <img className="png" src={folderPNG} />
                  <div className="text">{f.name}</div>
                </div>
              ))
            : folder?.map((f: any) => (
                <div className="folder">
                  <img
                    className="png"
                    onClick={() => Visible(f)}
                    src={folderPNG}
                  />
                  <div className="text">{f.name}</div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Folder;

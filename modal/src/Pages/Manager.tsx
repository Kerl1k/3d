import React from "react";
import { fileApi } from "../services/fileService";
import { IFile } from "../ts/IFile";
import "../CSS/Manager.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button/Button";

const Manager = () => {
  const { data: file } = fileApi.useFetchGetAllFileQuery("");
  console.log(file);
  return (
    <div className="mainBlock">
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
      <div className="headerInfo">
        <div className="textInfo">ФИО</div>
        <div className="textInfo">Подразделение</div>
        <div className="textInfo">Почта</div>
        <div className="textInfo">Номер телефона</div>
        <div className="textInfo">Статус</div>
      </div>
      {file ? (
        file.map((f: IFile) => (
          <div className="blockInfo">
            <div className="textInfo">{f.name}</div>
            <div className="textInfo">{f.subdivision}</div>
            <div className="textInfo">{f.email}</div>
            <div className="textInfo">{f.phone}</div>
            <select
              id="status"
              name="status"
              // onChange={(e: any) => ChangeStatus(reserv, e)}
              defaultValue={f.status}
            >
              <option value="Working">Ожидает</option>
              <option value="Awaiting confirmation">Отправлен в работу</option>
              <option value="Awaiting payment">Завершен</option>
            </select>
            <a href={"../../../back/static/" + f.file + ".png"}>Текст </a>
          </div>
        ))
      ) : (
        <h1>Нет</h1>
      )}
    </div>
  );
};

export default Manager;

import React from "react";
import { fileApi } from "../services/fileService";
import { IFile } from "../ts/IFile";
import "../CSS/Manager.css";

const Manager = () => {
  const { data: file } = fileApi.useFetchGetAllFileQuery("");
  console.log(file);
  return (
    <div className="mainBlock">
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
            <div className="textInfo">{f.status}</div>
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

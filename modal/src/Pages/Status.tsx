import TextField from "@mui/material/TextField/TextField";
import React, { useState } from "react";
import "../CSS/Status.css";
import { fileApi } from "../services/fileService";
import HeaderClient from "../components/HeaderClient";

const Status = () => {
  const [id, setId] = useState(0);
  const { data: project } = fileApi.useFetchGetOneFileQuery(id);
  return (
    <div>
      <HeaderClient />
      <div className="main">
        <TextField
          className="inputStatus"
          id="outlined-basic"
          label="Введите id проекта"
          variant="outlined"
          type="number"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
        />
        <div className="projectBlock">
          {project?.id !== undefined ? (
            <div className="infoBlock">
              <div className="infoText">Имя: {project.name}</div>
              <div className="infoText">Отдел: {project.subdivision}</div>
              <div className="infoText">Почта: {project.email}</div>
              <div className="infoText">Телефон: {project.phone}</div>
              <div className="infoText">Статус проекта: {project.status}</div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Status;

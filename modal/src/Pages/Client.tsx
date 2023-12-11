import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "../CSS/Client.css";
import { fileApi } from "../services/fileService";
import TextField from "@mui/material/TextField/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { NavLink } from "react-router-dom";
import HeaderClient from "../components/HeaderClient";
import { createPortal } from "react-dom";
import Manager from "./Manager";

interface Form {
  id: string;
  name: string;
  subdivision: string;
  email: string;
  phone: string;
  status: string;
}

const Client = () => {
  const [file, setFile] = useState(null);
  const [addFile] = fileApi.useFetchCreateFileMutation();
  const { register, handleSubmit } = useForm<Form>({
    defaultValues: {
      id: String(Date.now()),
      name: "",
      subdivision: "",
      email: "",
      phone: "",
      status: "wait",
    },
  });
  const selectFile = (e: any) => {
    if (e.target !== null) {
      setFile(e.target.files[0]);
    }
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const submit: SubmitHandler<Form> = (data) => {
    if (file !== null) {
      const formData = new FormData();
      formData.append("id", data.id);
      formData.append("name", data.name);
      formData.append("subdivision", data.subdivision);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("status", data.status);
      formData.append("file", file);
      addFile(formData);
    }
  };

  return (
    <div>
      <HeaderClient />
      <form className="form" onSubmit={handleSubmit(submit)}>
        <div className="inputBlock">
          Имя:
          <TextField
            id="standard-basic"
            className="inputForm"
            type="text"
            {...register("name")}
          />
        </div>
        <div className="inputBlock">
          Подразделение:
          <TextField
            id="standard-basic"
            className="inputForm"
            type="text"
            {...register("subdivision")}
          />
        </div>
        <div className="inputBlock">
          Почта:
          <TextField
            id="standard-basic"
            className="inputForm"
            type="text"
            {...register("email")}
          />
        </div>
        <div className="inputBlock">
          Телефон для связи:
          <TextField
            id="standard-basic"
            className="inputForm"
            type="text"
            {...register("phone")}
          />
        </div>
        <div className="inputBlock">
          <Button
            component="label"
            variant="contained"
            onChange={(e) => selectFile(e)}
            startIcon={<CloudUploadIcon />}
          >
            Добавить файл
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>
        <button className="buttonForm">Отправить</button>
      </form>
      {createPortal(<Manager />, document.body)}
    </div>
  );
};

export default Client;

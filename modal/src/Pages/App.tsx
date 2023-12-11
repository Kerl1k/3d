import React from "react";
import "../CSS/App.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button/Button";

function App() {
  return (
    <div className="App">
      <div className="button">
        <Link to={"/client"}>
          <Button variant="outlined" size="large">
            Клиент
          </Button>
        </Link>
      </div>
      <div className="button">
        <Link to={"/sign"}>
          <Button variant="outlined" size="large">
            Менеджер
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default App;

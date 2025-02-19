import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Sudoku from "./Sudoku";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Sudoku />
  </StrictMode>
);

import { useState } from "react";
import Modal from "./Modal";
import { ModalI } from "../interface/ModalI";

export default function CreateGrade({ semester, setGrades, axiosGet }: ModalI) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="buttonGrade button flex justify-center items-center gap-4 text-xl tooltip "
        onClick={() => setOpen(true)}
      >
        <p>Lançar Nota </p>
        <h1 className="text-2xl">+</h1>
        <span className="text-xs">Adicionar uma nota</span>
      </button>
      {open ? (
        <Modal setOpen={setOpen} semester={semester} axiosGet={axiosGet} />
      ) : null}
    </div>
  );
}

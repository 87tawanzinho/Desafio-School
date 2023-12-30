import { useState } from "react";
import Modal from "./Modal";

export default function CreateGrade({ semester }: ModalI) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="buttonGrade flex justify-center items-center gap-4 text-xl tooltip "
        onClick={() => setOpen(true)}
      >
        <p>Lançar Nota </p>
        <h1 className="text-2xl">+</h1>
        <span className="text-xs">Adicionar uma nota</span>
      </button>
      {open ? (
        <Modal setOpen={() => setOpen(!open)} semester={semester} />
      ) : null}
    </div>
  );
}

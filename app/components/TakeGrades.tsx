"use client";

import { useEffect, useState } from "react";
import instance from "../axios/instance";
import trash from "@/public/images/trash.gif";
import Image from "next/image";
import CreateGrade from "./CreateGrade";
import conversionSemester from "../strings/Semester";
import { format } from "date-fns";
export default function TakeGrades() {
  const [grades, setGrades] = useState<GradesI[]>([]);
  useEffect(() => {
    instance.get("").then((res) => {
      console.log(res.data);
      setGrades(res.data);
    });
  }, []);

  const gradesFiltered = (semester: string) => {
    const filteredGrades = grades.filter((note) => note.semester === semester);

    return (
      <div key={semester}>
        <div className="flex justify-between items-center w-full">
          <h2>{conversionSemester(semester)}</h2>

          <CreateGrade semester={semester} />
        </div>
        <div className="flex  flex-wrap gap-4  justify-center ">
          {filteredGrades.map((note) => (
            <div
              key={note._id}
              className="mt-10 flex gap-4  w-36 lg:w-40 h-40  bg-violet-900 rounded-2xl relative flex-wrap"
            >
              <div className="absolute end-0  top-1 tooltip-delete hover:opacity-75 transition-all">
                <Image src={trash} alt="lixo" className="h-7 w-7 rounded " />
                <span>Deletar</span>
              </div>
              <div className="flex flex-col ">
                <div className="p-2">
                  <p className="text-base text-gray-100">{note.subject}</p>
                  <p className="text-xs text-gray-400 ">
                    {" "}
                    {format(new Date(note.createdAt), "dd/MM/yyyy ")}
                  </p>
                </div>
                <div className="absolute bottom-4 p-2 bg-opacity-80 bg-black w-full ">
                  <p className="ml-4">Nota: {note.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-40">
        {gradesFiltered("PRIMEIRO")}
        {gradesFiltered("SEGUNDO")}
      </div>
    </>
  );
}

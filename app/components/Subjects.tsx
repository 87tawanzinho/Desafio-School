import { InputHTMLAttributes, useState } from "react";
import arraySubjects from "../strings/Subjects";
import instance from "../axios/instance";
import { ModalI } from "../interface/ModalI";

export default function Subjects({ semester, axiosGet, setOpen }: ModalI) {
  const [data, setData] = useState<GradesI>({
    semester: semester,
    grade: null,
    subject: "",
  });
  const [warnInfo, setWarnInfo] = useState("");
  const [warnTry, setWarnTry] = useState("");
  const [warnAxios, setWarnAxios] = useState("");
  const handleSubject = (subject: string) => {
    setWarnInfo(`Você escolheu: ${subject}`);
    setData((prev) => ({
      ...prev,
      subject: subject,
    }));
  };

  const handleGrade = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const axiosCreate = async () => {
    setWarnAxios("");

    if (data.subject == "") {
      return setWarnAxios("Escolha uma disciplina");
    }
    if (data.grade! < 0 || data.grade! > 10 || data.grade == null) {
      return setWarnAxios(
        "O que está fazendo? as notas nessa escola só vão de 0 a 10."
      );
    }
    try {
      setWarnTry("Fazendo nossa magica..");
      const res = await instance.post("/", {
        semester: data.semester,
        subject: data.subject,
        grade: data.grade,
      });
      axiosGet();
      setOpen(false);
    } catch (error: any) {
      setWarnTry("");
      setWarnAxios(error.response.data.error);
    }
  };
  return (
    <div className="mt-8 relative ">
      <p>Disciplina</p>
      <div className="flex mt-4 gap-4 flex-wrap justify-center lg:justify-normal lg:flex-nowrap">
        <button
          className="bg-pink-700 rounded-2xl   p-2 px-6 hover:opacity-70 transition-all"
          onClick={() => handleSubject(arraySubjects[0])}
        >
          Biologia
        </button>

        <button
          className="bg-green-700 rounded-2xl  p-2 px-6 hover:opacity-70 transition-all  "
          onClick={() => handleSubject(arraySubjects[1])}
        >
          Artes
        </button>

        <button
          className="bg-violet-700 rounded-2xl   p-2 px-6 hover:opacity-70 transition-all"
          onClick={() => handleSubject(arraySubjects[2])}
        >
          Geografia
        </button>

        <button
          className="bg-yellow-700 rounded-2xl   p-2 px-6 hover:opacity-70 transition-all"
          onClick={() => handleSubject(arraySubjects[3])}
        >
          Sociologia
        </button>
      </div>

      <div className="mt-10 flex flex-col gap-2">
        <p className="text-gray-300 text-sm">Nota</p>
        <input
          type="number"
          placeholder="7.4"
          className="w-24 rounded-lg p-2 opacity-80 border bg-input  border-zinc-800 "
          name="grade"
          step="any"
          pattern="^\d*(\.\d{0,2})?$"
          onChange={handleGrade}
        ></input>
      </div>
      {warnInfo && <p className="text-gray-200 mt-4">{warnInfo}</p>}
      {warnAxios && <p className="text-red-400">{warnAxios}</p>}
      {warnTry && <p className="text-green-400">{warnTry}</p>}
      <button
        onClick={axiosCreate}
        className="mt-4 absolute end-0 yellow-bg p-2 w-40 text-black font-bold rounded-2xl hover:opacity-70 transition-all"
      >
        Confirmar
      </button>
      <div className="p-4 lg:p-2 pb-8"></div>
    </div>
  );
}

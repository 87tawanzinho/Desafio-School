export default function Subjects() {
  return (
    <div className="mt-8 ">
      <p>Disciplina</p>
      <div className="flex mt-4 gap-8 flex-wrap lg:flex-nowrap">
        <button className="bg-pink-700 rounded-2xl">Biologia</button>

        <button className="bg-green-700 rounded-2xl ">Artes</button>

        <button className="bg-violet-700 rounded-2xl ">Geografia</button>

        <button className="bg-yellow-700 rounded-2xl ">Sociologia</button>
      </div>
    </div>
  );
}

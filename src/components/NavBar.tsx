import { useSelector } from "react-redux";

const NavBar = () => {
  const data = useSelector((state) => state.data);

  return (
    <nav className="flex items-center justify-between bg-blue-900 text-white h-16 px-6">
      <h1 className="text-lg font-semibold">
        Encuesta para Futuros Alumnos: {data.program}
      </h1>
      <div className="flex items-center justify-between gap-5">
        <i className="bi bi-person-circle text-xl"></i>
        <h2 className="flex text-sm font-normal">{data.user}</h2>
      </div>
    </nav>
  );
};

export { NavBar };

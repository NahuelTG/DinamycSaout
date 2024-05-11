import { useState } from "react";

interface Props {
  Usuario: String;
  Contraseña: String;
}

const Verficar = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleChangeUsuario = (e: any) => {
    setUsuario(e.target.value);
  };

  const handleChangeContraseña = (e: any) => {
    setContraseña(e.target.value);
  };

  const handleClickIngresar = () => {
    if (
      (usuario === "TiGreS" || usuario === "GaTaS") &&
      (contraseña === "Win@22122020" || contraseña === "Sol@06012022")
    ) {
      // Redireccionar a la siguiente página
      window.location.href = "/home";
      console.log("Credenciales correctas");
    } else {
      // Mostrar un mensaje de error o tomar otra acción en caso de credenciales incorrectas
      console.log("Credenciales incorrectas");
    }
  };
  return (
    <section className="container mx-auto max-w-fit py-40">
      <div className="bg-white h-72 w-96 rounded-xl box-border border-solid border-2 border-black">
        <header className="flex justify-center bg-orange-400 h-16 rounded-t-xl">
          <h1 className="text-white text-2xl content-center">
            <b>LOGIN</b>
          </h1>
        </header>
        <div className="grid grid-rows-3 mx-10">
          <div className="my-4">
            <p>Usuario</p>
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={handleChangeUsuario}
              className="border-solid border-2 border-black w-full rounded-lg pl-2 h-7"
            />
          </div>
          <div>
            <p>Contraseña</p>
            <input
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={handleChangeContraseña}
              className="border-solid border-2 border-black w-full rounded-lg pl-2 h-7 mt-4"
            />
          </div>
          <div className="w-24 mx-auto">
            <button
              onClick={handleClickIngresar}
              className="block w-full h-9 text-center leading-8 rounded-lg border border-solid border-blue-600 bg-blue-600 hover:bg-blue-400 text-white font-bold"
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verficar;

import './style.css'
import { useState } from "react";
 const [menuAberto, setMenuAberto] = useState(false);

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 transition-transform duration-300 ${
          menuAberto ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>

      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="m-4 p-2 bg-blue-500 text-white rounded z-10"
      >
        {menuAberto ? "Fechar" : "Abrir Menu"}
      </button>


      <div className="flex-1 p-8 ml-0 lg:ml-64">
        <h1 className="text-3xl font-bold">Conteúdo Principal</h1>
        <p>Aqui vai o resto da sua aplicação!</p>
      </div>
    </div>
  );
}
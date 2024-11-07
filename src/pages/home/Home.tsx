import { useState } from 'react';
import Announcement from '../../components/Announcement/Announcement';
import MapComponent from '../../components/Mapping/MapComponent';

export default function Home() {
  // Estado para controlar qual seção exibir
  const [activeSection, setActiveSection] = useState('artigos'); // Pode ser 'artigos', 'projetos' ou 'participar'

  return (
    <div>
      <Announcement />
      <MapComponent />

      {/* Botões para alternar entre seções */}
      <div className="flex justify-center gap-4 my-4">
        <button
          onClick={() => setActiveSection('projetos')}
          className={`py-2 px-4 rounded ${activeSection === 'projetos' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Nossos Projetos
        </button>
        <button
          onClick={() => setActiveSection('participar')}
          className={`py-2 px-4 rounded ${activeSection === 'participar' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Como Participar
        </button>
        <button
          onClick={() => setActiveSection('artigos')}
          className={`py-2 px-4 rounded ${activeSection === 'artigos' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Artigos
        </button>
      </div>

      {/* Renderização condicional com base no estado */}
      {activeSection === 'projetos' && (
        <div className="p-4 bg-blue-50 mt-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">Nossos Projetos</h2>
            <p className="text-gray-600">Conteúdo sobre nossos projetos...</p>
          </div>
        </div>
      )}
      {activeSection === 'participar' && (
        <div className="p-4 bg-blue-50 mt-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">Como Participar</h2>
            <p className="text-gray-600">Informações sobre como participar...</p>
          </div>
        </div>
      )}
      {activeSection === 'artigos' && (
        <div className="p-4 bg-blue-50 mt-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">Artigos</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Faucibus volutpat purus nisl massa. Egestas odio sagittis 
              pulvinar sagittis id imperdiet sapien amet...
            </p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
              Ver artigos
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

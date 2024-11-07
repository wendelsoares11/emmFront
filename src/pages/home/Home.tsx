import { useState } from 'react';
import Announcement from '../../components/Announcement/Announcement';
import MapComponent from '../../components/Mapping/MapComponent';
import { CardComponent } from '../../components/Card/CardComponent';

export default function Home() {
  // Estado para controlar qual seção exibir
  const [activeSection, setActiveSection] = useState('artigos'); // Pode ser 'artigos', 'projetos' ou 'participar'

  return (
    <div>
      <Announcement />
      <MapComponent />
      <CardComponent 
        title='Pessoas conversando'
        description='Duas pessoas trocam ideias em uma conversa animada e envolvente. O diálogo é uma das formas mais poderosas de conexão, permitindo a troca de histórias, experiências e novas perspectivas.' 
        imgUrl='https://miro.medium.com/v2/resize:fit:1200/1*MI1KEoh0jC6766EIUvPEWw.jpeg'
      />
      <CardComponent 
        title='Gato aleatório'
        description='Este adorável gato descansa tranquilamente, observando o mundo com seus olhos curiosos. Os gatos são conhecidos por sua independência, charme e por serem companheiros fiéis nos momentos de relaxamento.' 
        imgUrl='https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      />
      <CardComponent 
        title='Espaço'
        description='Quando olhamos para o espaço, nos deparamos com uma vastidão inimaginável, repleta de estrelas, galáxias e mistérios. O universo é imenso e ainda em grande parte inexplorado, nos lembrando de como somos pequenos diante de sua grandiosidade e das infinitas possibilidades que ele guarda.' 
        imgUrl='https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      />

      {/* Botões para alternar entre seções */}
      {/*<div className="flex justify-center gap-4 my-4">
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
      </div>*/}

      {/* Renderização condicional com base no estado 
      {activeSection === 'projetos' && (
        <div className="p-4 bg-blue-50 mt-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">Nossos Projetos</h2>
            <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nossos Projetos" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-600">Aqui você pode conhecer mais sobre os nossos projetos incríveis e como estamos impactando a comunidade.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Ver Projetos
            </button>
          </div>
        </div>
      )}
      {activeSection === 'participar' && (
        <div className="p-4 bg-blue-50 mt-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">Como Participar</h2>
            <img src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Como Participar" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-600">Saiba como você pode se envolver, colaborar e fazer parte da nossa comunidade de projetos.</p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Participar Agora
            </button>
          </div>
        </div>
      )}
      {activeSection === 'artigos' && (
        <div className="p-4 bg-blue-50 mt-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">Artigos</h2>
            <img src="https://images.pexels.com/photos/3760096/pexels-photo-3760096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Artigos" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Faucibus volutpat purus nisl massa. Egestas odio sagittis 
              pulvinar sagittis id imperdiet sapien amet...
            </p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
              Ver Artigos
            </button>
          </div>
        </div>
      )}*/}
    </div>
  );
}

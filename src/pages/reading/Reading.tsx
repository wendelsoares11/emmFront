
import { useParams } from 'react-router-dom'
import BarChart from '../../components/Charts/BarChart/Barchart'
import useFetch from '../../hooks/useFetch';


interface DataType {
  id: number;
  name: string;
}

export default function Reading() {
  const { id } = useParams();
  const token = import.meta.env.VITE_API_TOKEN;
  const apiUrl = import.meta.env.VITE_API_URL_STATIONS_ID;

  const { data, loading, error } = useFetch<DataType[]>(
    `${apiUrl}${id}`, 
    token
  );

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os dados: {error.message}</p>;

  return (
    <div>
        <h1>Gráfico {id}</h1>
        {data && (
          <h1>Dados carregados da api</h1>
        )}
        <BarChart />
    </div>
  )
}

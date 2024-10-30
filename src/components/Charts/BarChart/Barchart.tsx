// src/components/BarChart.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartOptions } from 'chart.js';

// Registre os componentes necessários para o gráfico
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = () => {
    // Dados do gráfico
    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'], // Rotulos do eixo X
        datasets: [
            {
                label: 'Vendas',
                data: [12, 19, 3, 5, 2, 3], // Dados do gráfico
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Opções do gráfico
    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Gráfico de Vendas por Mês',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;

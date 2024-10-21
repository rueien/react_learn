import React from 'react';
import { Bar, Pie, Line, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale
);

const App = () => {
  // Bar chart data
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1900, 3000, 5000, 2000, 3000, 7000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Colors',
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Line chart data
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Stock Prices',
        data: [100, 200, 150, 220, 300, 270, 290],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  // Radar chart data
  const radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  return (
    <div>
      <h1>Chart.js Visualization</h1>

      {/* Bar Chart */}
      <div style={{ width: '50%', margin: '0 auto' }}>
        <h2>Bar Chart</h2>
        <Bar data={barData} />
      </div>

      {/* Pie Chart */}
      <div style={{ width: '50%', margin: '0 auto' }}>
        <h2>Pie Chart</h2>
        <Pie data={pieData} />
      </div>

      {/* Line Chart */}
      <div style={{ width: '50%', margin: '0 auto' }}>
        <h2>Line Chart</h2>
        <Line data={lineData} />
      </div>

      {/* Radar Chart */}
      <div style={{ width: '50%', margin: '0 auto' }}>
        <h2>Radar Chart</h2>
        <Radar data={radarData} />
      </div>
    </div>
  );
};

export default App;

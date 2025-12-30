import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useContext } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);
import { Line } from 'react-chartjs-2'
import { ReadContext } from '../Context/ReadContext';

function LineChart() {

     const {readings}=useContext(ReadContext);
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'readings',
        data: readings.map(l => l.id),
        borderColor: '#800020',
        tension: 0.4,
      },
    ],
  }

  return <Line data={data} />
}

export default LineChart

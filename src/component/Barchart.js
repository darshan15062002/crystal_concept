
import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { data } from 'autoprefixer'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
function Barchart() {
    const data = {
        labels: ['mon', 'tue', 'wed', 'ac', 'ccasca', 'cddda', 'cadcd', 'dvcdsds', 'dsvds'],
        datasets: [{
            label: 'Marks',
            data: [3, 6, 12, 4, 5, 6, 2, 17, 8, 4],
            backgroundColor: 'rgb(255, 99, 132)',
            barThickness: 15,
        }]
    }
    const options = {
        responsive: true,

    }

    return (
        <div >
            <Bar options={options} data={data}></Bar>

        </div >
    )
}

export default Barchart

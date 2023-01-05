
import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, ArcElement, LinearScale, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'


ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend)
function Piechart() {
    const data = {
        labels: [
            'Attended', 'Absent'

        ],

        datasets: [{
            label: 'IN Persent',
            data: [60, 40],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',

            ],
            hoverOffset: 4
        }]
    }
    const options = {
        responsive: true,
    }

    return (
        <div >
            <Pie options={options} data={data}></Pie>

        </div >
    )
}

export default Piechart
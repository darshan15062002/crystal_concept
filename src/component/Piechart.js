
import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, ArcElement, LinearScale, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'


ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend)
function Piechart({ marks, outof }) {

    let sum1 = 0
    let sum2 = 0
    for (const item of marks) {
        sum1 += item;
    }
    for (const item of outof) {
        sum2 += item;
    }
    console.log(sum1, sum2);
    const data = {
        labels: [
            'Marks', 'Obtain Marks'

        ],

        datasets: [{
            label: 'Marks',
            data: [sum2, sum1],
            backgroundColor: [
                '#132C33',
                '#00337C',

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
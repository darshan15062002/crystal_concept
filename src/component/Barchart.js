
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import axios from 'axios'



ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function Barchart({ marks, date, subject }) {








    const data = {
        labels: [...date],
        datasets: [{
            label: 'Marks',
            data: [...marks],
            backgroundColor: 'rgb(255, 99, 132)',
            barThickness: 30,
        }]
    }
    const options = {
        responsive: true,

    }

    // useEffect(() => {
    //     const getStudent = async () => {
    //         const student = await axios.get("http://localhost:4000/api/v1/student/63b9380af8b7ba01208f1aea")

    //         console.log(student.data.product.marks);
    //         setMarks(student.data.product.marks)

    //     }
    //     getStudent()


    // }, [])


    return (
        <div >
            <Bar options={options} data={data}></Bar>

        </div >
    )
}

export default Barchart

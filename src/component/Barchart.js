
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'



ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function Barchart({ marks, date, outof }) {








    const data = {
        labels: [...date],
        datasets: [{
            label: 'Marks',

            data: [...outof],

            backgroundColor: '#132C33',

            barThickness: 30,
        }, {
            label: 'Marks',

            data: [...marks],

            backgroundColor: '#82AAE3',

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

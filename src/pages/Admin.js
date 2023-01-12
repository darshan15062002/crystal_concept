import React, { useState } from 'react'
import { Button, Input, Label } from '@windmill/react-ui'
import axios from 'axios'
const Admin = () => {
    const [name, setName] = useState()
    const [marks, setMarks] = useState()
    const [subject, setSubject] = useState()
    const [date, setDate] = useState()
    console.log(date);
    const [data, setData] = useState()
    const handleSubmit = async (e) => {
        // const res = await axios.get(`http://localhost:4000/api/v1/student?name=${name}`).then((data) => {

        const res = await axios.get(`https://crystal-concept-backend.onrender.com/api/v1/student?name=${name}`).then((data) => {

            setData(data?.data.product[0])
        })
        console.log(data);

        // const send = await axios.put(`http://localhost:4000/api/v1/student/${data._id}`, {
        const send = await axios.put(`https://crystal-concept-backend.onrender.com/api/v1/student/${data._id}`, {
            "name": `${data.name}`,
            "standard": data.std,
            "marks": [...data.marks, { m: marks, subject: subject, createdAt: `${date}T14:46:17.975Z` }]
        }).then((data) => {
            alert("successful")
        }).catch((err) => {
            console.log(err);
        })
    }



    return (

        <div>
            <div className='bg-purple-100  h-screen w-screen flex items-center justify-center'>
                <div className="flex flex-col items-center justify-center   h-100 w-4/5 ">

                    <div className="sm:w-1/2 sm:h-2/3 w-full  rounded-lg shadow-2xl hover:t border-2 flex flex-col gap-3 shadow-black sm:px-16 px-6 mx-4 py-5 bg-purple-900">
                        <h1 className='font-bold text-xl font-serif mb-2 text-purple-300 text-center' >Marks Entry</h1>
                        <Label className='flex flex-col'  >
                            <span className='text-xs text-purple-50 font-serif'>Name</span>
                            <Input type='text' className="mt-1 h-8 rounded-md " onChange={(e) => setName(e.target.value)} />
                        </Label>
                        <Label className='flex flex-col'  >
                            <span className='text-xs text-purple-50 font-serif'>Subject</span>
                            <Input type='text' className="mt-1 h-8 rounded-md " onChange={(e) => setSubject(e.target.value)} />
                        </Label>
                        <Label className='flex flex-col'  >
                            <span className='text-xs text-purple-50 font-serif'>Marks</span>
                            <Input type='number' className="mt-1 h-8 rounded-md " onChange={(e) => setMarks(e.target.value)} />
                        </Label>

                        <Label className='flex flex-col'  >
                            <span className='text-xs text-purple-50 font-serif'>yyyy-mm-dd</span>
                            <Input type='date' className="mt-1 h-8 rounded-md " onChange={(e) => setDate(e.target.value)} />
                        </Label>
                        <Button className='bg-purple-400  p-1 mt-1' onClick={handleSubmit}> Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin

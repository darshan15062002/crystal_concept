import React, { useEffect, useState } from 'react'
import { Button, Input, Label, Select } from '@windmill/react-ui'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [marks, setMarks] = useState();
    const [subject, setSubject] = useState();
    const [date, setDate] = useState();
    const [outof, setOutof] = useState();
    const [standard, setStandard] = useState();
    const [formname, setFormname] = useState([]);
    const [inputname, setInputName] = useState([]);

    const [data, setData] = useState()
    useEffect(() => {
        const response = async () => {
            await axios.get("https://crystal-concept-backend.onrender.com/api/v1/student").then(data => {
                setFormname(data.data.product)
            })
            let document = []
            formname.forEach((item) => {
                if (item.standard == standard) {
                    document.push(item.name)
                }
            })
            setInputName(document);
        }

        response()

    }, [standard])

    const handleSubmit = async (e) => {
        console.log(name);
        // const res = await axios.get(`http://localhost:4000/api/v1/student?name=${name}`).then((data) => {

        const res = await axios.get(`https://crystal-concept-backend.onrender.com/api/v1/student?name=${name}`).then((data) => {

            setData(data?.data.product[0])
        })
        console.log(data);

        // const send = await axios.put(`http://localhost:4000/api/v1/student/${data._id}`, {

        const send = await axios.put(`https://crystal-concept-backend.onrender.com/api/v1/student/${data._id}`, {
            "name": `${data.name}`,
            "email": `${data.email}`,
            "standard": data.std,
            "marks": [...data.marks, { m: marks, outof: outof, subject: subject, createdAt: `${date}T14:46:17.975Z` }]
        }).then(() => {
            alert("successful")
            navigate('/admin')
        }).catch((err) => {
            console.log(err);
        })
        setData()


    }



    return (

        <div>
            <div className=' h-screen w-screen flex items-center justify-center' style={{ fontFamily: 'Poppins', background: 'white' }}>
                <div className="flex flex-col items-center justify-center   h-100 w-4/5 ">

                    <div className="sm:w-1/2 sm:h-2/3 w-full  rounded-lg shadow-2xl hover:t  flex flex-col gap-3 shadow-black sm:px-16 px-6 mx-4 py-5 bg-purple-900" style={{ fontFamily: 'Poppins', background: '#00337C' }}>
                        <h1 className='font-bold text-xl font-serif mb-2 text-center text-white' style={{ fontFamily: 'Poppins' }}>Marks Entry</h1>
                        <Label className='flex flex-col'  >
                            <span className='text-xs text-purple-50 font-serif' style={{ fontFamily: 'Poppins' }}>Standard</span>
                            <Select className='w-full h-8' valid onChange={(e) => { setStandard(e.target.value) }}>
                                <option style={{ fontFamily: 'Poppins' }} value={''}></option>
                                <option style={{ fontFamily: 'Poppins' }} value={'6'}>6</option>
                                <option style={{ fontFamily: 'Poppins' }} value={'7'}>7</option>
                                <option style={{ fontFamily: 'Poppins' }} value={'8'}>8</option>
                                <option style={{ fontFamily: 'Poppins' }} value={'9'}>9</option>
                                <option style={{ fontFamily: 'Poppins' }} value={'10'}>10</option>
                            </Select>
                        </Label>
                        <Label className='flex flex-col'  >
                            <span className='text-xs text-purple-50 font-serif' style={{ fontFamily: 'Poppins' }}>Name</span>
                            <Select className='w-full h-8' valid onChange={(e) => setName(e.target.value)}>
                                <option style={{ fontFamily: 'Poppins' }} value={''}></option>
                                {
                                    inputname.map((item) => {
                                        return (<option key={item} style={{ fontFamily: 'Poppins' }} value={`${item}`}>{item}</option>)

                                    })
                                }


                            </Select>
                            {/* <Input type='text' className="mt-1 h-8 rounded-md " onChange={(e) => setName(e.target.value)} /> */}
                        </Label>
                        <Label className='flex flex-col'  >
                            <span className='text-xs text-purple-50 font-serif' style={{ fontFamily: 'Poppins' }}>Subject</span>
                            <Select className='w-full h-8' valid onChange={(e) => { setSubject(e.target.value) }}>
                                <option style={{ fontFamily: 'Poppins' }} value={'science'}>Science</option>
                                <option style={{ fontFamily: 'Poppins' }} value={'maths'}>Maths</option>
                                <option style={{ fontFamily: 'Poppins' }} value={'english'}>English</option>
                                <option style={{ fontFamily: 'Poppins' }} value={'history'}>History</option>
                                <option style={{ fontFamily: 'Poppins' }} value={'geography'}>Geography</option>
                            </Select>
                        </Label>
                        <Label className='flex flex-col'  >
                            <span className='text-xs text-purple-50 font-serif' style={{ fontFamily: 'Poppins' }}>Marks</span>
                            <Input type='number' className="mt-1 h-8 rounded-md " onChange={(e) => setMarks(e.target.value)} />
                        </Label>
                        <Label className='flex flex-col'  >
                            <span className='text-xs text-purple-50 font-serif' style={{ fontFamily: 'Poppins' }}>Out-Of</span>
                            <Input type='number' className="mt-1 h-8 rounded-md " onChange={(e) => setOutof(e.target.value)} />
                        </Label>

                        <Label className='flex flex-col'  >
                            <span className='text-xs text-purple-50 font-serif' style={{ fontFamily: 'Poppins' }}>yyyy-mm-dd</span>
                            <Input type='date' className="mt-1 h-8 rounded-md " onChange={(e) => setDate(e.target.value)} />
                        </Label>
                        <Button className='bg-purple-400  p-1 mt-1' onClick={handleSubmit} style={{ fontFamily: 'Poppins', background: '#0081C9' }}> Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin

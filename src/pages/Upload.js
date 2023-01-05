
import React, { useEffect, useState } from "react";
import { Button, Input } from "@windmill/react-ui";
import axios from "axios";

function Upload() {


    const [attendance, setAttendance] = useState(true);
    const [marks, setMarks] = useState(false);
    const [outof, setOutof] = useState('');
    const [stdname, setStdName] = useState([]);
    const [std, setStd] = useState(0);
    console.log(std);

    useEffect(() => {
        async function fatchgats() {
            const req = await axios.get(
                `http://localhost:3001/std-${std}th`
            );
            setStdName(req.data);
        }
        fatchgats();
    }, [std]);
    // useEffect(() => {
    //     async function fatchgats() {
    //         const req = await axios.post('http://localhost:3001/std', { std: std });

    //     }
    //     fatchgats();
    // }, [std]);










    // checkbox

    const [userinfo, setUserInfo] = useState({
        User: [],

    });
    console.log(userinfo.User);

    const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { User } = userinfo;

        console.log(`${value} is ${checked}`);

        // Case 1 : The user checks the box
        if (checked) {
            setUserInfo({
                User: [...User, value],

            });
        }

        // Case 2  : The user unchecks the box
        else {
            setUserInfo({
                User: User.filter((e) => e !== value),

            });
        }
    };


    return (
        <div className="bg-purple-100 h-full mt-0 pt-16">


            <div className="flex justify-around mx-3 my-3 py-2  items-centers rounded-xl shadow-md shadow-black  ">
                <Button onClick={() => { setAttendance(true); setMarks(false) }} className="p-2  text-xl font-serif bg-purple-500 hover:bg-purple-900 rounded-md text-white ">Attendance</Button>
                <Button onClick={() => { setMarks(true); setAttendance(false) }} className="p-2 text-xl font-serif bg-purple-500 hover:bg-purple-900 rounded-md text-white ">Marks</Button>
            </div>

            <div className="mx-3 my-3 mt-6 rounded-xl shadow-md shadow-black h-screen">
                {attendance && (<div><div className="flex justify-evenly pt-3 items-center">
                    <div onClick={() => { setStd(5); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900 text-white font-bold text-xl">5</div>
                    <div onClick={() => { setStd(6); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900 text-white font-bold text-xl">6</div>
                    <div onClick={() => { setStd(7); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900 text-white font-bold text-xl">7</div>
                    <div onClick={() => { setStd(8); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900 text-white font-bold text-xl">8</div>
                    <div onClick={() => { setStd(9); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900 text-white font-bold text-xl">9</div>
                    <div onClick={() => { setStd(10); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900  text-white font-bold text-xl">10</div></div>

                    {stdname.map((std) => { return (<div className="flex justify-between px-3 py-3 " key={std.id}>    <h1 className="font-bold text-xl">{std.name}</h1> <Input className="text-xl w-5" type="checkbox" value={std.name} onChange={handleChange} /></div>) })}
                    <Button className="bg-purple-500 px-3 py-2 m-5" >Submit</Button>
                </div>)}
                {marks && (<div><div className="flex justify-evenly pt-3 items-center">
                    <div onClick={() => { setStd(5); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900 text-white font-bold text-xl">5</div>
                    <div onClick={() => { setStd(6); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900 text-white font-bold text-xl">6</div>
                    <div onClick={() => { setStd(7); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900 text-white font-bold text-xl">7</div>
                    <div onClick={() => { setStd(8); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900 text-white font-bold text-xl">8</div>
                    <div onClick={() => { setStd(9); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900 text-white font-bold text-xl">9</div>
                    <div onClick={() => { setStd(10); }} className="bg-purple-500 rounded-full px-4 py-2 hover:bg-purple-900  text-white font-bold text-xl">10</div></div>
                    <h1 className="font-bold text-md mt-3 mx-4">Marks Out Of<Input className="mx-3 my-3 w-14 text-center" onChange={(e) => setOutof(e.target.value)} type="number" /></h1>
                    {stdname.map((std) => { return (<div className="flex justify-between mx-6 py-6" key={std.id}>    <h1 className="font-bold text-xl">{std.name}</h1> <div className="flex"><Input className="font-bold text-md text-center mr-2 w-14" type="number" /> <h1 className="font-bold text-xl">/ {outof}</h1></div></div>) })}</div>)}

            </div>
        </div>
    );
}
export default Upload;
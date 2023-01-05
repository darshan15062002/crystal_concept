import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import Barchart from '../component/Barchart';
import Piechart from '../component/Piechart';




function Main() {
    const [searchpharams] = useSearchParams()
    const username = searchpharams.get('id').split('@')[0];

    // const [filename, setFileName] = useState([]);
    // useEffect(() => {
    //     const imagedoc = async () => {
    //         const q = query(
    //             collection(db, "images"));
    //         const querySnapshot = await getDocs(q);

    //         let document = [];
    //         querySnapshot.forEach((doc) => {
    //             document.push({ ...doc.data(), id: doc.id });
    //         });
    //         console.log(document);
    //         setFileName(document);
    //     };

    //     return () => imagedoc();
    // }, []);
    // console.log(filename);

    // const [model, setModel] = useState(false);
    // const [tempimg, setTempImg] = useState('')
    // const getImage = (imgsrc) => {
    //     setTempImg(imgsrc);
    //     setModel(true);

    // }
    // const removeimg = () => {
    //     setModel(false)
    // }
    return (
        <div className='bg-purple-100 pt-2  h-screen'>
            {/* {model && <div className=" fixed flex h-screen w-full justify-center bg-black bg-opacity-70 items-center"><div className="flex flex-col justify-center h-screen w-11/12  ">
                <img src='cross.png' className='w-7 mb-3 text-white font-bold ' onClick={removeimg} />
                <img src={tempimg} alt="" className='w-full' />
            </div></div>
            } */}
            <div className=" flex h-28 mt-14 shadow-md shadow-black  bg-purple-500 text-left  p-5 text-white font-extrabold font-serif text-xl   mx-3  rounded-lg"> <h1>Hello {username} <br />Wellcome To Crystal Concept </h1></div>
            {/* <div className="flex flex-wrap justify-center mx-3 ">
                <div className="flex items-end justify-center sci w-2/5 h-32 m-3 shadow-md shadow-black bg-purple-500 rounded-md  "><h1 className='font-extraboldbold text-4xl  font-serif mb-2 text-white text-center' >Science</h1></div>
                <div className="flex items-end justify-center maths w-2/5 h-32 m-3 shadow-md shadow-black  bg-purple-500 rounded-md  "><h1 className='font-extraboldbold text-4xl  font-serif mb-2 text-white text-center' >Maths</h1></div> </div> */}
            {/* <div className="bg-purple-100  mx-3 pt-2 flex flex-wrap justify-center shadow-md shadow-black rounded-md">
                {filename.map((doc) => {
                    return (
                        <div key={doc.id} className="  flex justify-center mx-1 w-full h-52 shadow-md mb-3 shadow-purple-900" onClick={() => getImage(doc.url)}>
                            <img src={doc.url} alt="##" onError={(event) => (event.target.style.display = "none")} />

                        </div>)
                })} */}
            {/* </div> */}
            <div className="flex justify-center">
                <h1 className=' text-xl font-serif bg-purple-500 px-1 mt-3 rounded-md text-white'>Marks</h1></div>
            <div className="mx-3 my-3  bg-purple-50 rounded-xl shadow-md shadow-black"><Barchart /></div>
            <div className="flex justify-center">
                <h1 className=' text-xl font-serif bg-purple-500 px-1 rounded-md text-white'>Attendance</h1></div>
            <div className="flex flex-wrap m-3 my-3 bg-purple-50 rounded-xl shadow-md shadow-black justify-center "><Piechart /></div>
        </div >
    )
}

export default Main
import axios from "axios"

const createNewStudent = async (data) => {
    const res = await axios.post("https://crystal-concept-backend.onrender.com/api/v1/student/new", data).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
}


export default createNewStudent 
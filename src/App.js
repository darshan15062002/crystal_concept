
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Upload from "./pages/Upload";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/main' element={< Main />}></Route>
          <Route exact path='/' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/upload' element={< Upload />}></Route>
        </Routes>
        {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}

      </BrowserRouter>


    </div>
  );
}

export default App;

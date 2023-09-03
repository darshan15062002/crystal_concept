
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Home from "./pages/Home/Home";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/main' element={< Main />}></Route>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/admin' element={< Admin />}></Route>
        </Routes>
        {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}

      </BrowserRouter>


    </div>
  );
}

export default App;

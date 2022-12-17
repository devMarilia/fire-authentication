import { Route, Routes } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Accout from "./components/Accout"

function App() {


  return (
    <div >
      <h1 className="text-center text-3xl font-bold">
        Fire Autentication
      </h1>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="accout" element={<Accout/>} />
      </Routes>
    </div>
  )
}

export default App

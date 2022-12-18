import { Route, Routes } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Accout from "./components/Accout"

function App() {


  return (
    <div >
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="accout" element={<Accout/>} />
      </Routes>
    </div>
  )
}

export default App

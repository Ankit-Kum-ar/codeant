import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/Sign-In/SignIn"
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {
  return (
    <>
      <Routes>
        {/* Routes go here */}
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App

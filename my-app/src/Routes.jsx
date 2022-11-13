import { Routes, Route } from 'react-router-dom'
import Home from './Home'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default AllRoutes

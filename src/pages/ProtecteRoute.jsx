import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtecteRoute = () => {
    const tranier = useSelector(state => state.trainer)
   

    if (tranier.length >= 3) {
        return <Outlet/>
    } else {
        return <Navigate to='/'/>
    }
}

export default ProtecteRoute
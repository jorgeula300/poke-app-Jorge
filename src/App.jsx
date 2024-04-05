import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PokedexPage from "./pages/PokedexPage"
import PokeDetailPage from "./pages/PokeDetailPage"
import ProtecteRoute from "./pages/ProtecteRoute"




function App() {
  const trainer = useSelector(state => state.trainer)



  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtecteRoute />}  >
          <Route path="/pokedexPage" element={<PokedexPage />} />
          <Route path="/pokeDetailPage/:id" element={<PokeDetailPage />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App

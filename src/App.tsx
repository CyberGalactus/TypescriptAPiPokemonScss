// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import EvolutionPage from './pages/EvolutionPage'
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {

  
  return (
    <>
      {/* <PokemonContext.Provider value={{pokemon, setPokemon}}>
        <BuddyContext.Provider value={{buddy, setBuddy}}> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/evolution" element={<EvolutionPage />} />
            {/* <Route path="/*" element={<FileNotFound />} /> */}
          </Route>  
        </Routes>
        {/* </BuddyContext.Provider> */}

      {/* </PokemonContext.Provider> */}
    </>
  )
}

export default App;
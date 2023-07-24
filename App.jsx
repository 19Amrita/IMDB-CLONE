import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/homes/home";
import MovieList from "./components/header/movieList/movieList";
import Movie from "./pages/movieDetail/movie";
const App = () => {
    return(
        <div className="App">
        <Router>
        <Header/>
            <Routes>
                <Route index element ={<Home/>}></Route>
                <Route path="movie/:id" element={<Movie/>}></Route>
                <Route path="movies/:type" element={<h1><MovieList/></h1>}></Route>
                <Route path="/*" element={<h1>Error page 404 found</h1>}></Route>
            </Routes>
        </Router>
        
        </div>
    )
}
export default App;
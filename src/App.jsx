import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Counter from './Components/Counter';
import Contact from './Components/Contact'


function App(){
return(
	<>
		<Routes>
		<Route path="/" element={ <><Header /> <Home /> </> } />
		<Route path="/about" element={<><Header /><About /> </>} />
		<Route path="/counter" element={<><Header /><Counter /> </>} />
		<Route path="/contact" element={<><Header /><Contact /> </>} />
		</Routes>
		
    </>

);
}

export default App;
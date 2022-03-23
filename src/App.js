import React from "react";
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from "./components/navbar/Navbar";
import Calculator from "./components/calculator/Calculator";
import Exchange from "./components/exchange/Exchange";
import Converter from "./components/converter/Converter";


function App() {
	return (
		<div className={styles.wrapper}>
			<Navbar />
			<Routes>
				<Route path='/' element={<Calculator />} />
				<Route path='/exchange' element={<Exchange />} />
				<Route path='/converter' element={<Converter />} />
			</Routes>
		</div>
	);
}

export default App;

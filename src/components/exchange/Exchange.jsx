import React, { useEffect, useState } from 'react';
import styles from './Exchange.module.css';
import delete_icon from '../../assets/icons/delete-red.svg';
import currency_icon from '../../assets/icons/currency-icon.svg';
import currencies from '../../functions/currencies.js';


const Exchange = () => {
	const [value, setValue] = useState('')
	const [currency, setCurrency] = useState([])
	const [currencyRate, setCurrencyRate] = useState([])
	const [inputCurrency, setInputCurrency] = useState('')
	const [outputCurrency, setOutputCurrency] = useState('')


	function handleDigitButton(e) {
		setValue(value + e)
	}

	function handleDeleteButton() {
		setValue(value.slice(0, value.length - 1))
	}


	// function getExchangeRate() {
	// 	const exchangeUrl = `https://v6.exchangerate-api.com/v6/95a49933011e7c6f059fe990/latest/${inputCurrency}`;
	// 	fetch(exchangeUrl)
	// 		.then(response => response.json())
	// 		.then(response => {
	// 			setCurrency(Object.keys(response.conversion_rates))
	// 			setCurrencyRate(Object.values(response.conversion_rates))
	// 		})
	// 	console.log(currency);
	// }


	useEffect(() => {
		const exchangeUrl = `https://v6.exchangerate-api.com/v6/95a49933011e7c6f059fe990/latest/${inputCurrency}`;
		fetch(exchangeUrl)
			.then(response => response.json())
			.then(response => {
				setCurrency(Object.keys(response.conversion_rates))
				setCurrencyRate(Object.values(response.conversion_rates))
			})
		console.log(currency);
	}, [outputCurrency])


	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.header__wrapper}>
					<div className={styles.select}>
						<select
							className={styles.select__list}
							value={inputCurrency}
							// onClick={getExchangeRate}
							onChange={(e) => setInputCurrency(e.target.value)}
						>
							<option style={{ display: "none" }}></option>
							{currencies.map((item, index) => {
								return <option key={Date.now() + index} >{item}</option>
							})}
						</select>
						<img className={styles.currency__icon} src={!inputCurrency ? currency_icon : ''} alt="" />
					</div>
					<input
						className={styles.input}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder='0'
					/>
				</div>
				<div className={styles.header__wrapper}>
					<div className={styles.select}>
						<select
							className={styles.select__list}
							value={outputCurrency}
							onChange={(e) => setOutputCurrency(e.target.value)}
						>
							<option style={{ display: "none" }}></option>
							{currencies.map((item, index) => {
								return <option key={Date.now() + index}>{item}</option>
							})}
						</select>
						<img className={styles.currency__icon} src={!outputCurrency ? currency_icon : ''} alt="" />
					</div>
					<div className={styles.output}>{outputCurrency && inputCurrency ? (Math.floor((value * currencyRate[currency.indexOf(outputCurrency)]) * 100) / 100) : 0}</div>
				</div>
			</div>
			<div className={styles.main}>
				<div className={styles.digits}>
					<button className={styles.digit} onClick={() => handleDigitButton(7)}>7</button>
					<button className={styles.digit} onClick={() => handleDigitButton(8)}>8</button>
					<button className={styles.digit} onClick={() => handleDigitButton(9)}>9</button>
					<button className={styles.digit} onClick={() => handleDigitButton(4)}>4</button>
					<button className={styles.digit} onClick={() => handleDigitButton(5)}>5</button>
					<button className={styles.digit} onClick={() => handleDigitButton(6)}>6</button>
					<button className={styles.digit} onClick={() => handleDigitButton(1)}>1</button>
					<button className={styles.digit} onClick={() => handleDigitButton(2)}>2</button>
					<button className={styles.digit} onClick={() => handleDigitButton(3)}>3</button>
					<button className={styles.digit} onClick={() => handleDigitButton('00')}>00</button>
					<button className={styles.digit} onClick={() => handleDigitButton(0)}>0</button>
					<button className={styles.digit} onClick={() => handleDigitButton('.')}>.</button>
				</div>
				<div className={styles.controls}>
					<button className={styles.reset} onClick={() => setValue('')}>C</button>
					<button className={styles.delete} onClick={handleDeleteButton}><img src={delete_icon} alt="delete" /></button>
				</div>
			</div>
		</div>
	)
}

export default Exchange;
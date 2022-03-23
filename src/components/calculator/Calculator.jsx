import React, { useState } from 'react';
import styles from './Calculator.module.css';
import deleteIcon from '../../assets/icons/delete.svg';



const Calculator = () => {
	const [value, setValue] = useState({ a: '', b: '' })
	const [operator, setOperator] = useState('')
	const [result, setResult] = useState('')

	function handleResetButton() {
		setValue({ a: '', b: '' })
		setResult('')
		setOperator('')
	}

	function handleDeleteButton() {
		operator === ''
			? setValue({ ...value, a: value.a.slice(0, value.a.length - 1) })
			: setValue({ ...value, b: value.b.slice(0, value.b.length - 1) })
	}

	function handleDigitButton(e) {
		operator === ''
			? setValue({ ...value, a: value.a + e })
			: setValue({ ...value, b: value.b + e })
	}

	function handleOperatorButton(e) {
		setOperator(e.target.innerHTML)
		setValue({ ...value, b: '' })
	}

	function handleResultButton() {
		if (operator && result === '') {
			if (operator === '+') {
				setResult(Math.floor((+value.a + +value.b) * 100) / 100)
			} else if (operator === '-') {
				setResult(Math.floor((+value.a - +value.b) * 100) / 100)
			} else if (operator === '×') {
				setResult(Math.floor((+value.a * +value.b) * 100) / 100)
			} else if (operator === '÷') {
				setResult(Math.floor((+value.a / +value.b) * 100) / 100)
			}
			setValue({ ...value, a: '' })
		} else if (operator && result !== '') {
			if (operator === '+') {
				setResult(Math.floor((result + +value.b) * 100) / 100)
			} else if (operator === '-') {
				setResult(Math.floor((result - +value.b) * 100) / 100)
			} else if (operator === '×') {
				setResult(Math.floor((result * +value.b) * 100) / 100)
			} else if (operator === '÷') {
				setResult(Math.floor((result / +value.b) * 100) / 100)
			}
			setValue({ ...value, a: '' })
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.header__wrapper}>
					<div className={styles.output}>{(operator !== '' && value.a !== '') ? value.a + operator : result}</div>
					<input
						value={value.b === '' ? value.a : value.b}
						onChange={(e) => setValue(e.target.value)}
						className={styles.input}
						placeholder='0'
					/>
				</div>
			</div>
			<div className={styles.main}>
				<div className={styles.buttons}>
					<div className={styles.controls}>
						<button className={styles.reset} onClick={handleResetButton}>C</button>
						<button className={styles.delete} onClick={handleDeleteButton}><img src={deleteIcon} alt="delete" /></button>
					</div>
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
				</div>
				<div className={styles.operators}>
					<button className={styles.operator} onClick={handleOperatorButton}>×</button>
					<button className={styles.operator} onClick={handleOperatorButton}>÷</button>
					<button className={styles.operator} onClick={handleOperatorButton}>-</button>
					<button className={styles.operator} onClick={handleOperatorButton}>+</button>
					<button className={styles.result} onClick={handleResultButton}>=</button>
				</div>
			</div>
		</div>
	)
}

export default Calculator;
import React from 'react';
import styles from './CalculatorStyle.module.scss';
import Screen from './Screen/Screen';
import Buttons from './Buttons/Buttons';

export default function Calculator() {
	return (
		<div className={styles.calculator}>
			<Screen/>
			<Buttons/>
		</div>
	)
}

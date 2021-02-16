import React from 'react';
import styles from './ScreenStyle.module.scss';
import Expression from './Expression/Expression';
import Result from './Result/Result';

export default function Screen() {
	return (
		<div className={styles.screen}>
			<Expression/>
			<Result/>
		</div>
	)
}

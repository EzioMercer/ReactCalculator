import React from 'react';
import styles from './ExpressionStyle.module.scss';
import {useSelector} from 'react-redux';

export default function Expression() {
	const expression = useSelector(state => state.screenReducer).expression;

	return (
		<div className={styles.expression}>
			{expression}
		</div>
	)
}

import React from 'react';
import styles from './ResultStyle.module.scss';
import {useSelector} from 'react-redux';

export default function Result() {
	const result = useSelector(state => state.screenReducer).result;

	return (
		<div className={styles.result}>
			{result}
		</div>
	)
}

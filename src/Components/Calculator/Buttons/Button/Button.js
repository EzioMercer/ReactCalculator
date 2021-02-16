import React from 'react';
import styles from './ButtonStyle.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {changeExpression} from '../../../../Redux/buttonsAction';

export default function Button(props) {
	const dispatch = useDispatch();
	const {expression, needStartNewExpression} = useSelector(state => state.screenReducer);

	return (
		<button
			className={`
				${styles.button}
				${props.isAC ? styles.ac : ''}
				${props.simpleAction ? styles.simpleAction : ''}
				${props.equal ? styles.equal : ''}
			`}
			onClick={() => dispatch(changeExpression(expression, props.text, needStartNewExpression))}
		>
			{props.text}
		</button>
	)
}

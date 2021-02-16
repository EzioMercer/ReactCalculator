import React from 'react';
import styles from './ButtonsStyle.module.scss';
import Button from './Button/Button';

export default function Buttons() {
	const buttons = [
		'AC',  '⌫', '%',  '/',
		'7',   '8',   '9',  '*',
		'4',   '5',   '6',  '-',
		'1',   '2',   '3',  '+',
		'.',   '0',   '='
	];

	return (
		<div className={styles.buttons}>
			{
				buttons.map((button, index) => <Button text={button} isAC={button === 'AC'} simpleAction={button.match(/[/*\-+]/)} equal={button === '='}/>)
			}
		</div>
	)
}

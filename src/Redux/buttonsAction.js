import {useDispatch} from 'react-redux';

export const INPUT = 'INPUT';
export const CLEAR_ALL = 'CLEAR_ALL';
export const CONFIRM_RESULT = 'CONFIRM_RESULT';

function setExpression(expressionAndResult) {
	return {
		type: INPUT,
		payload: expressionAndResult
	}
}

function clearExpression() {
	return {
		type: CLEAR_ALL
	}
}

function confirmResult(result) {
	return {
		type: CONFIRM_RESULT
	}
}

function parseExp(exp) {
	const parsedExp = [];

	exp = exp.replace(/^(\+)|(\-|\+|\*|\/)$/g, '');
	exp = exp.replace(/(?!^)\-/g, '+-');

	while (exp) {
		const curr = exp.match(/^(\-)?\d+(\.\d+)?/);
		let offset;
		if (curr) {
			parsedExp.push(+curr[0]);
			offset = curr[0].length;
		} else {
			parsedExp.push(exp[0]);
			offset = 1;
		}
		exp = exp.substring(offset);
	}

	return parsedExp;
}

function calculate(exp) {

	let left = exp[0] || 0;
	let right;

	if(exp[1] === undefined) return left;

	if(exp[1] === '+') {
		right = calculate(exp.slice(2));
		return left + right;
	} else {
		let operator = 1;
		let number = 2;

		while(exp[operator] === '*' || exp[operator] === '/') {
			if(exp[operator] === '*') {
				left *= exp[number];
			} else {
				left /= exp[number];
			}
			operator += 2;
			number += 2;
		}

		return left + calculate(exp.slice(number));
	}

}

export function changeExpression(expression, symbol, needStartNewExpression) {
	return (dispatch = useDispatch()) => {

		switch (symbol) {
			case 'AC':
				dispatch(clearExpression());
				break;
			case '⌫':
				expression = expression.substring(0, expression.length - 1);
				if(!expression) expression = '0';
				dispatch(setExpression({
					expression: expression,
					result: calculate(parseExp(expression))
				}));
				break;
			case '=':
				dispatch(confirmResult());
				break;
			case '%':
				break;
			default:
				const regexp = /\+|-|\/|\*|\./;
				const parsedExpression = parseExp(expression);
				let allowToChange = false;

				if(symbol !== '.' || (''+parsedExpression[parsedExpression.length - 1]).indexOf('.') === -1)
					allowToChange = true;

				if((expression === '0' && symbol.match(/-|\d/)) || (needStartNewExpression && symbol.match(/\d/))) {
					expression = symbol;
				} else if(symbol.match(regexp) && expression[expression.length - 1].match(regexp) && allowToChange) {
					 expression = expression.replace(/.$/, symbol);
				} else if(allowToChange) {
					expression = expression + symbol;
				}

				dispatch(setExpression({
					expression: expression,
					result: calculate(parseExp(expression))
				}));
		}
	}
}

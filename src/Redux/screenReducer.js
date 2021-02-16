import {CLEAR_ALL, CONFIRM_RESULT, INPUT} from './buttonsAction';

const INITIAL_STATE = {
	expression: '0',
	result: 0,
	needStartNewExpression: false
};

function screenReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case INPUT:
			return {
				expression: action.payload.expression,
				result: action.payload.result,
				needStartNewExpression: false
			};
		case CONFIRM_RESULT:
			return {
				...state,
				expression: ''+state.result,
				needStartNewExpression: true
			};
		case CLEAR_ALL:
			return {
				expression: '0',
				result: 0,
				needStartNewExpression: false
			};
		default:
			return state;
	}
}

export default screenReducer;

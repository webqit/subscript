
/**
 * @imports
 */
import Lexer from '../Lexer.js';
import VoidInterface from './VoidInterface.js';

/**
 * ---------------------------
 * Void (boolean) class
 * ---------------------------
 */				

const Void = class extends VoidInterface {
	
	/**
	 * @inheritdoc
	 */
	constructor(val) {
		super();
		this.val = val;
	}
	 
	/**
	 * @inheritdoc
	 */
	eval() {
		return this.val.toLowerCase().trim() === 'null' ? null : undefined;
	}
	
	/**
	 * @inheritdoc
	 */
	toString() {
		return this.val;
	}
	
	/**
	 * @inheritdoc
	 */
	static parse(expr, parseCallback, params = {}, Static = Void) {
		var expr = expr.toLowerCase().trim();
		if (expr === 'null' || expr === 'undefined') {
			return new Static(expr);
		}
	}
};

/**
 * @exports
 */
export default Void;
class InputValidator {
	private validator: ValidatorStrategy;

	constructor(strategy: ValidatorStrategy) {
		this.validator = strategy;
	}

	public setStrategy(strategy: ValidatorStrategy) {
		this.validator = strategy;
	}

	public validate(input: string): boolean {
		return this.validator.validate(input);
	}
}

interface ValidatorStrategy {
	validate(val: string): boolean;
}

/**
 * The following validators are simple validations to demonstrate the strategy pattern.
 * Each validator implements the ValidatorStrategy interface.
 */
class StartsWithValidatorStrategy implements ValidatorStrategy {
	public validate(val: string) {
		return val.startsWith("H");
	}
}

class EndsWithValidatorStrategy implements ValidatorStrategy {
	public validate(val: string) {
		return val.endsWith("!");
	}
}

class IncludesValidatorStrategy implements ValidatorStrategy {
	public validate(val: string): boolean {
		return val.includes("o W");
	}
}

/**
 * `validateInput` puts the `InputValidator` and its strategies into action.
 *
 * @param input
 * @returns boolean
 */
function validateInput(input: string): boolean {
	const strategies = [
		new EndsWithValidatorStrategy(),
		new IncludesValidatorStrategy(),
	];
	const validator = new InputValidator(new StartsWithValidatorStrategy());

	const validationResults = [validator.validate(input)];

	strategies.forEach((strategy) => {
		validator.setStrategy(strategy);
		validationResults.push(validator.validate(input));
	});

	return validationResults.every((result) => result === true);
}

validateInput("Hello World!");
console.log(
	"🚀 ~ validateInput('Hello World!'):",
	validateInput("Hello World!"),
);
console.log("goodbye", validateInput("Goodbye World :("));

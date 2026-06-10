class Singleton {
	static #instance: Singleton;

	private constructor() {}

	/**
	 * The static getter that controls access to the singleton instance.
	 *
	 * This implementation allows you to extend the Singleton class while
	 * keeping just one instance of each subclass around.
	 */
	public static get instance(): Singleton {
		if (!Singleton.#instance) {
			Singleton.#instance = new Singleton();
		}

		return Singleton.#instance;
	}

	/**
	 * Finally, any singleton can define some business logic, which can be
	 * executed on its instance.
	 */
	public printRandomNumber() {
		console.log("doing business logic!", Math.random());
	}
}

/**
 * The client code.
 */
function clientCode() {
	const s1 = Singleton.instance;
	const s2 = Singleton.instance;

	s1.printRandomNumber();
	s2.printRandomNumber();
}

clientCode();

class Sandwich {
	constructor(
		public bread: string,
		public peanutButter?: string,
		public jelly?: string,
		public hasCrust?: boolean,
	) {}
}

class SandwichBuilder {
	private bread!: string;
	private peanutButter?: string;
	private jelly?: string;
	private hasCrust?: boolean = true;

	setBread(bread: "white" | "wheat"): this {
		this.bread = bread;
		return this;
	}

	setPeanutButter(peanutButter: "crunchy" | "smooth"): this {
		if (!this.bread) throw new Error("Bread must be set first!");
		this.peanutButter = peanutButter;
		return this;
	}

	setJelly(jelly: "grape" | "strawberry"): this {
		if (!this.peanutButter) throw new Error("Peanut butter must be set first!");
		this.jelly = jelly;
		return this;
	}

	setCrust(hasCrust: boolean): this {
		if (!this.bread) throw new Error("Bread must be set first!");
		this.hasCrust = hasCrust;
		return this;
	}

	build(): Sandwich {
		if (!this.bread) throw new Error("Bread is required!");
		return new Sandwich(
			this.bread,
			this.peanutButter,
			this.jelly,
			this.hasCrust,
		);
	}
}

class SandwichDirector {
	private builder!: SandwichBuilder;

	public setBuilder(builder: SandwichBuilder): void {
		this.builder = builder;
	}

	public buildPBandJ() {
		return this.builder
			.setBread("wheat")
			.setJelly("grape")
			.setPeanutButter("crunchy")
			.build();
	}

	public buildPBWithoutCrust() {
		return this.builder
			.setBread("white")
			.setCrust(false)
			.setPeanutButter("smooth")
			.build();
	}
}

const sandwich = new SandwichBuilder();

const director = new SandwichDirector();
director.setBuilder(sandwich);

console.log("🚀 ~ sandwich without crust:", director.buildPBWithoutCrust());
console.log("🚀 ~ sandwich without crust:", director.buildPBandJ());

import { getDay } from "date-fns";

/**
 * The Target defines the domain-specific interface used by the client code.
 */
class DateTarget {
	public getDay(date: Date): number {
		return date.getDay();
	}
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class DateAdapter extends DateTarget {
	private time: Date;

	constructor(time: Date) {
		super();
		this.time = time;
	}

	public getDay(): number {
		return getDay(this.time);
	}
}

const time = new Date();
/**
 * The client code supports all classes that follow the Target interface.
 */
function getTime(target: DateTarget) {
	console.log(target.getDay(time));
}

console.log("Client: I can work just fine with the Target objects:");
const target = new DateTarget();
getTime(target);

console.log("");

console.log("Client: But I can work with it via the Adapter:");
const adapter = new DateAdapter(time);
getTime(adapter);

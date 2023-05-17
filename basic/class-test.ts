import { Subscribable } from "./Subscribable";

const sub = new Subscribable<string>();

const unsub = sub.subscribe(console.log);
sub.publish("Hello, world!");

unsub();
sub.publish("Hello!");
class DataClass extends Subscribable<number> {
  constructor(public value: number) {
    super();
  }

  setValue(value: number) {
    this.value = value;
    this.publish(value);
  }
}

const data = new DataClass(0);
const unsub2 = data.subscribe((v: number) => console.log(`Value is ${v}`));
const unsub3 = data.subscribe(console.log);
unsub3();
data.setValue(42);

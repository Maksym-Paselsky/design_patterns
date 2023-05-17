import { createSubscribable } from "./Subscribable-function";

const sub = createSubscribable<string>();

const unsub = sub.subscribe(console.log);
sub.publish("Hello, world!");

unsub();
sub.publish("Hello!");

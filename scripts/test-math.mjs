import assert from 'node:assert/strict';
import {task,parseAnswer,correct} from '../lib/math.ts';
let count=0;
for(const level of [1,2,3])for(let seed=0;seed<1000;seed++){
 const t=task(level,seed);
 const lhs=level===3?t.a*(t.x+t.b):t.a*t.x+t.b;
 assert.equal(lhs,t.c);assert.ok(correct(String(t.x),t.x));assert.ok(!correct(String(t.x+1),t.x));
 assert.ok(t.hints.length>=2);assert.ok(t.steps.length>=3);count++;
}
for(const v of ['', ' ', 'abc', '0x5', '5abc', 'Infinity', '1/0'])assert.equal(parseAnswer(v),null);
assert.equal(parseAnswer(' 5 '),5);assert.equal(parseAnswer('5.0'),5);assert.equal(parseAnswer('-2.5'),-2.5);
console.log(`${count} generated tasks passed equation, correct-answer, wrong-answer and guidance checks. Input tests passed.`);

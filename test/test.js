mijan=22;
console.log(mijan);
const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]);
for (const i in [1, 2, 3]) {
	console.log(i);
  }
  for (let a of [1, 2, 3]) {
    console.log(a);
}
const colors = require("colors");

const { colt } = require("..");

console.time('name');
for (let i = 0; i < 1000000; i++) {
  colt(colt('test').red().bgBlack().t() + 1111).blue().t();
}
console.timeEnd('name');

console.time('name2');
for (let i = 0; i < 1000000; i++) {

  colors.blue(colors.bgBlack(colors.red('test')) + 1111);
}
console.timeEnd('name2');
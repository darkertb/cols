const { colt } = require("..");
const cols = require("..");

const a = colt('test').color256(55).bgCyan().bold().italic().strikethrough();

const b = colt('fewer' + a + '12345').hex('#00ff00').log();
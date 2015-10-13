// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;

for (var i = 0; i <= scores.length; i ++) {
	var score = scores[i];

// console.log(score);

	if (score > 90) {
		a = ++a;
		// console.log("a", a);
	}
	else if (score > 79 && score < 91) {
		b = ++b;
		// console.log("b", b);
	}
	else if (score > 69 && score < 81) {
		c = ++c;
		// console.log("c", c);
	}
	else if (score > 59 && score < 71) {
		d = ++d;
		// console.log("d", d);
	}
	else if (score < 61) {
		f = ++f;
		// console.log("f", f);
	}
}
console.log("# of A's = ", a);
console.log("# of B's = ", b);
console.log("# of C's = ", c);
console.log("# of D's = ", d);
console.log("# of F's = ", f);
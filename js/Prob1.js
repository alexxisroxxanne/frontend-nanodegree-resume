// write the function getRelationship(x,y) so that calling it returns
// a string representing whether x is > < or = to y
// Function should display error and explanation if values besides
// numbers are entered

function getRelationship(x,y) {
	var printedString = "";

	// if (x === Number && y === Number)
	if (!isNaN(x) && !isNaN(y))
	{
		if (x > y)
			// console.log(">");
			printedString = ">";
		else if (x < y)
			// console.log()
			printedString = "<";
		else if (x === y)
			printedString = "=";
	}
	// else if (x !== Number && y !== Number)
	else if (isNaN(x) && isNaN(y))
		// console.log("Can't compare relationships because " + x + "and "
		// + y "are not numbers");
		printedString = "Can't compare relationships because " + x +
			" and " + y + " are not numbers";
	// else if (x === Number && y !== Number)
	else if (!isNaN(x) && isNaN(y))
		printedString = "Can't compare relationships because " + y +
			" is not a number";
	// else if (x !== Number && y === Number)
	else if (isNaN(x) && !isNaN(y))
		printedString = "Can't compare relationships because " + x +
			" is not a number";

	return printedString;
}

var rel = getRelationship(2, 3);
console.log(rel);

var rel1 = getRelationship("this", 2);
console.log(rel1);

var rel2 = getRelationship("that");
console.log(rel2);
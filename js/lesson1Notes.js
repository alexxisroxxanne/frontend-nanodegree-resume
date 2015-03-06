// Append a string to the html
// $("#main").append("Alexxis Johnson");

// Create variable and print in console
//var awesomeThoughts;
//awesomeThoughts = "I am Alexxis and I am Awesome!";
//console.log(awesomeThoughts);

// string replace
// [string].replace(old, new);
	// var email = "cameron@udacity.com";
	// var newEmail = email.replace("udacity", "gmail");
	// console.log(email);
	// console.log(newEmail);

// replace Awesome with Fun
//var funThoughts = awesomeThoughts.replace("Awesome", "Fun");
//$("#main").append(funThoughts);

//".replace()ing Placeholder Data in HTML"
var formattedName = HTMLheaderName.replace("%data%", "Alexxis Johnson");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Create an array
var skills = ["Web Dev", "Programming", "Learning", "JS"];
// $("#main").append(skills); // appends all items in array
// $("#main").append(skills[0]); // appends item at index 0
// $("#main").append(skills.length); // appends length of array

// Add one to the last int in an array
//function incrementLastArrayElement(_array)  {
//    var newArray = [];
//    newArray = _array.slice(0);
//    var lastNumber = newArray.pop();
//    newArray.push(lastNumber + 1);
//    return newArray;
//}

// Format strings
//function nameChanger(oldName) {
//    var finalName = oldName;
//    var names = oldName.split(" ");
//    names[1] = names[1].toUpperCase();
//    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//    finalName = names.join(" ");
//    return finalName;
//}

// NOTE - THERE ARE NO CLASSES in JAVASCRIPT

// Dictionary AKA Creating Objects - This is Object Literal Notation
// not actually a dictionary
var bio = {
	"name" : "Alexxis",
	"role" : "Web Developer",
	"contactInfo" : "Email: alexxis.r.p.johnson@gmail.com",
	"picture" : "images/fry.jpg",
	"welcomeMessage" : "Welcome!",
	"skills" : skills
}
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contactInfo);
$("#main").append(bio.picture);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
// $("#main").append(bio.name);   for just name

// Create a property
// bio.email = "me@me.com";     no need for var
// bio["email"] = "me@me.com";    same just accessed diff

var work = {};
work.position = "Marketing";
work.employer = "Tulip Medical";
work.yearsWorked = 3;
work.city = "San Diego";

//var education = {};
//education["name"] = "City College";
//education["years"] = 1;
//education["city"] = "San Diego";

//$("#main").append(work["position"]);
//$("#main").append(education.name);

// JSON = JavaScript Object Notation

// Create a new object education using JSON
var education = {
	"schools" : [
		{
			"name" : "AUP",
			"city" : "Paris",
			"major" : "Undeclared",
			"minor" : "None",
			"gradYear" : "NA",
			"onlineCourse" : "None"
		},
		{
			"name" : "USD",
			"city" : "San Diego",
			"major" : "Comp Sci",
			"minor" : "French",
			"gradYear" : "NA",
			"onlineCourse" : "None"
		},
		{
			"name" : "City College",
			"city" : "San Diego",
			"major" : "Computer Science",
			"minor" : "NA",
			"gradYear" : "Exp 2016",
			"onlineCourse" : "Many"
		}
	]
}

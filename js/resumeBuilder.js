var bio = {
	"name" : "Alexxis Johnson",
	"role" : "Web Developer",
	"contacts" : [
		{
			"mobile" : "619-540-9575",
			"email" : "alexxis.r.p.johnson@gmail.com",
			"github" : "alexxisroxxanne",
			"twitter" : "@alexxisroxxanne",
			"location" : "San Diego, CA"
		}
	],
	"welcomeMessage" : "Welcome to my portfolio!",
	"skills" : ["HTML", "JavaScript", "JQuery", "Git", "GitHub"],
	"biopic" : "images/fry.jpg"
}

var education = {
	"schools" : [
		{
			"name" : "The Bishop's School",
			"location" : "La Jolla, CA",
			"degree" : "High School Diploma",
			"majors" : ["N/A"],
			"dates" : 2013,
			"url" : "http://www.bishops.com"
		},
		{
			"name" : "San Diego City College",
			"location" : "San Diego, CA",
			"degree" : "Exp. Associates",
			"majors" : ["Computer Science"],
			"dates" : 2016,
			"url" : "http://www.sdcity.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com"
		},
		{
			"title" : "Objective-C",
			"school" : "Code School",
			"date" : 2014,
			"url" : "https://www.codeschool.com"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Tulip Medical Products",
			"title" : "Sales and Marketing Support Specialist",
			"location" : "San Diego, CA",
			"dates" : "August 2012 + August 2013 - Present",
			"description" : "Marketing + Client Care + Sales"
		},
		{
			"employer" : "Free-Lance",
			"title" : "Web Developer",
			"location" : "Web",
			"dates" : "Soon",
			"description" : "This is kind of a filler for now"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Udacity Project 1",
			"dates" : "February 2015",
			"description" : "Mock-Up of Image",
			"images" : [
				//{
				{	"image1" : "images/fry.jpg"},
				{	"image2" : "images/197x143.gif"}
				//}
			]
		},
		{
			"title" : "Udacity Project 2",
			"dates" : "April 2015",
			"description" : "Something About JavaScript",
			"images" : [
				// {
					{"image1" : "images/fry.jpg"},
					{"image2" : "images/197x143.gif"}
				// }
			]
		}
	]
}

// Encapsulate function display in bio
// Display bio data on resume
bio.display = function()  {
	for (contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",
			bio.contacts[contact].mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%",
			bio.contacts[contact].email);
		$("#topContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%",
			bio.contacts[contact].github);
		$("#topContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%",
			bio.contacts[contact].twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedLocation1 = HTMLlocation.replace("%data%",
			bio.contacts[contact].location);
		$("#topContacts").append(formattedLocation1);
	}

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",
		bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%",
			bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}
bio.display();


// Encapsulate function display in work
// Display work data on resume
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace
			("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace
			("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDate = HTMLworkDates.replace
			("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);

		var formattedLocation = HTMLworkLocation.replace
			("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace
			("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();


// Encapsulate function display in projects
// Display projects data on resume
projects.display = function() {

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace
			("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace
			("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace
			("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace
					("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();


// Add additional functionality

// Click logger
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

// Name internationalize
function inName(name) {
	var finalName = name;
    var names = name.trim().split(" "); // making copy variable

    console.log(names);

    names[1] = names[1].toUpperCase(); // changes value of this
    names[0] = names[0].slice(0,1).toUpperCase() +
    	names[0].slice(1).toLowerCase();

    finalName = names.join(" ");

    return finalName;
}
$("#main").append(internationalizeButton);
inName(bio.name); // not necessary - can use in console though

// Add Google Map
$("#mapDiv").append(googleMap);
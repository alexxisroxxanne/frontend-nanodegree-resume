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
	"welcomeMessage" : "Welcome to my portfolio! Not the color "
		+ "scheme you were expecting? You can comment out my "
		+ "css edits at the bottom of resumeBuilder.js.",
	"skills" : ["HTML", "JavaScript", "JQuery", "Git", "GitHub"],
	"biopic" : "images/fry.jpg",

	// Encapsulate function display in bio
	"display" : function()  {
		for (contact in bio.contacts) {
			var formattedMobile = HTMLmobile.replace("%data%",
				bio.contacts[contact].mobile);
			$("#topContacts").append(formattedMobile);
			$("#footerContacts").append(formattedMobile);

			var formattedEmail = HTMLemail.replace("%data%",
				bio.contacts[contact].email);
			$("#topContacts").append(formattedEmail);
			$("#footerContacts").append(formattedEmail);

			var formattedGithub = HTMLgithub.replace("%data%",
				bio.contacts[contact].github);
			$("#topContacts").append(formattedGithub);
			$("#footerContacts").append(formattedGithub);

			var formattedTwitter = HTMLtwitter.replace("%data%",
				bio.contacts[contact].twitter);
			$("#topContacts").append(formattedTwitter);
			$("#footerContacts").append(formattedTwitter);

			var formattedLocation1 = HTMLlocation.replace("%data%",
				bio.contacts[contact].location);
			$("#topContacts").append(formattedLocation1);
			$("#footerContacts").append(formattedLocation1);
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
	],

	// Display education data on resume
	"display" : function() {

		$("#education").append(HTMLschoolStart);

		for (school in education.schools)
		{


			var formattedSchoolName = HTMLschoolName.replace("%data%",
				education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",
				education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolName
				+ formattedSchoolDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%",
				education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace
				("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",
				education.schools[school].majors);
			$(".education-entry:last").append(formattedSchoolMajor);

		}

		$(".education-entry:last").append(HTMLonlineClasses);

		for (course in education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",
				education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",
				education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedOnlineTitle
				+ formattedOnlineSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%",
				education.onlineCourses[course].date);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%",
				education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
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
	],

	// Display work data on resume
	"display" : function() {
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
}


var projects = {
	"projects" : [
		{
			"title" : "Udacity Project 1",
			"dates" : "February 2015",
			"description" : "Mock-Up of Image",
			"images" : [
				"images/fry.jpg",
				"images/197x148.gif"
			]
		},
		{
			"title" : "Udacity Project 2",
			"dates" : "April 2015",
			"description" : "Something About JavaScript",
			"images" : [
				"images/fry.jpg",
				"images/197x148.gif"
			]
		}
	],

	// Display projects data on resume
	"display" : function() {

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
}


// Call display functions
bio.display();
education.display();
work.display();
projects.display();




/*
Add additional functionality
*/

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
inName(bio.name); // for use in console though

// Add Google Map
$("#mapDiv").append(googleMap);




/*
	Change the CSS from its default

	Comment out rest of code to see original design
*/

// main background color change - now white
$("#main").css("background-color", "#ffffff");

// change orange text to blue
var nameText = $("h1").first(); // Name
nameText.css("color", "#6088c2");
$("#skillsH3").css("color", "#85a3d0"); // Skills at a Glance
$(".orange-text").css("color", "#97b1d7"); // in Footer

// change let's connect from orange to green
$(".center-text").css("background-color", "#b1d797");

// change header section text colors
var roleText = $("span").first(); // Web Developer
roleText.css("color", "#b1d797");
$(".white-text").css("color", "#2d3540"); // contact info
$(".welcome-message").css("color", "#2d3540"); // welcome msg

// edit layout of header - name and role etc.
nameText.css("display", "block");
nameText.css("text-align", "center");
nameText.css("padding", "10px 0px");
roleText.css("text-align", "center");
roleText.css("display", "inherit");
roleText.css("padding-bottom", "20px");
$("#topContacts").css("padding", "20px 10px");

// change header and footer background color - now white
$("#header").css("background-color", "#ffffff");
$(".dark-gray").css("background-color", "#ffffff");

// change lighter gray bkdg to light blue
$(".gray").css("background-color", "#f4f7fb");

// change white bkgd to different light blue
$("#projects").css("background-color", "#eaeff7");
$("#mapDiv").css("background-color", "#eaeff7");

// change links color
$("a").css("color", "#d797b1");

// change h2 color
$("h2").css("color", "#85a3d0");

// change p/paragraph text color
$("p").css("color", "#2d3540");

// change em/italic text color
$("em").css("color", "#2d3540");

// change h3 text color
$("h3").css("color", "#85a3d0"); // Online Classes


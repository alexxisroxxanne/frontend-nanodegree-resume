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
				{
					"image1" : "images/fry.jpg",
					"image2" : "images/197x143.gif"
				}
			]
		},
		{
			"title" : "Udacity Project 2",
			"dates" : "March 2015",
			"description" : "Something About JavaScript",
			"images" : [
				{
					"image1" : "images/fry.jpg",
					"image2" : "images/197x143.gif"
				}
			]
		}
	]
}

var bio = {
	"name" : "Alexxis Johnson",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome to my portfolio!",
	"contacts" : [
		{
			"phone" : "619-540-9575",
			"email" : "alexxis.r.p.johnson@gmail.com",
			"github" : "alexxisroxxanne",
			"twitter" : "@alexxisroxxanne",
			"location" : "San Diego, CA"
		}
	],
	"skills" : ["HTML", "JavaScript", "JQuery", "Git", "GitHub"]
}

var education = {
	"schools" : [
		{
			"name" : "The Bishop's School",
			"location" : "La Jolla, CA",
			"degree" : "High School Diploma",
			"majors" : "N/A",
			"minors" : "N/A",
			"dates" : "August 2009 - May 2013",
			"url" : "http://www.bishops.com"
		},
		{
			"name" : "San Diego City College",
			"location" : "San Diego, CA",
			"degree" : "Exp. Associates",
			"majors" : "Computer Science",
			"minors" : "Undecided",
			"dates" : "January 2015 - August 2016 (Exp.)",
			"url" : "http://www.sdcity.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "January 2015 - August 2015 (Exp.)",
			"url" : "http://www.udacity.com"
		},
		{
			"title" : "Objective-C",
			"school" : "Code School",
			"dates" : "July 2014 - October 2014",
			"url" : "https://www.codeschool.com"
		}
	]
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace
		("%data%", work.jobs[job].employer);
	// $("#employer").append(formattedJob);
	// $("work-entry:last").append(formattedJob);
	// formattedJob = HTMLworkEmployer.replace("%data", work.jobs.employer[1]);
	// $("#employer").append(formattedJob);
	// $("work-entry:last").append(formattedJob);

	var formattedTitle = HTMLworkTitle.replace
		("%data%", work.jobs[job].title);
	// $("#title").append(formattedJob);
	// $("work-entry:last").append(formattedJob);
	// formattedJob = HTMLworkTitle.replace("%data", work.jobs.title[1]);
	// $("#title").append(formattedJob);

	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
}
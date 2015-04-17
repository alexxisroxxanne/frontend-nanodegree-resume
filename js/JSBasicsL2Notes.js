// Some more notes

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

// LOL Everything. is an object. in JS

projects.display = function() {
	// Encapsulates function in projects
}

function displayWork() {
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

		var formattedPosition = HTMLworkLocation.replace
			("%data%", work.jobs[job].position);
		$(".work-entry:last").append(formattedPosition);

		var formattedDate = HTMLworkDates.replace
			("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);

		var formattedLocation = HTMLworkLocation.replace
			("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace
			("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	// var formattedPositionDateDescription = formattedPosition +
	//	formattedDate + formattedDescription;

	// $(".work-entry:last").append(formattedPositionDateDescription);
	}
}

// JS Anonymous Functions have no name, can be used as a parameter
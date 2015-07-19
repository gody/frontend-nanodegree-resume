var bio = {
	'name' : 'Diego Amenábar',
	'role' : 'Ninja Front-End Student',
	'contacts' : {
		'mobile': '+56 - 9 - 9238 3234',
		'email': 'gody84@gmail.com',
		'twitter': '@d_amenabar',
		'github': 'gody',
		'location': 'Santiago, Chile'
	},
	'biopic' : 'images/diego.jpg',
	'welcomeMessage' : 'Welcome to my bio!',
	'skills' : ['GREAT', 'Genius', 'Motivated'],
	display : function() {
		// Header of the page
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
		// Contact information (compress code) on top and footer
		$.each(bio.contacts, function(key,value){
			var formattedContact = HTMLcontactGeneric.replace('%data%',value).replace('%contact%',key);
			$('#topContacts').append(formattedContact);
			$('#footerContacts').append(formattedContact);
		});
		// Bio Pic
		var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
		$('#header').append(formattedBioPic);
		// Welcome Message
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		$('#header').append(formattedWelcomeMessage);
		// Skills
		if (bio.skills.length >0) {
			$('#header').append(HTMLskillsStart);
			for(skill in bio.skills){
				var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
				$('#skills').append(formattedSkill);
			}
		}
	}
};

var work ={
	'jobs':[
		{
			'employer': 'Telefonica',
			'title': 'Digital Sales Manager',
			'location': 'Santiago, Chile',
			'dates': 'fecha de pega',
			'description': 'Loreasfn asjh faksjh fasiuh kjasfhkj haiusfhjk fakfuahsf kjasf huafkjha uasfhk ajsfhkausfhkas jfakusfhfkjahfuh'
		}
	],
	display : function(){
		for(job in work.jobs){
			$('#workExperience').append(HTMLworkStart);
			// Job Title
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$('.work-entry:last').append(formattedEmployerTitle);
			// Job Dates
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$('.work-entry:last').append(formattedDates);
			// Job Location
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$('.work-entry:last').append(formattedLocation);
			// Job Description
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$('.work-entry:last').append(formattedDescription);

		}
	}
};

var projects ={
	'projects':[
		{
			'title': 'BikeMyMoney',
			'dates': 'poner fechas',
			'description': 'bla bla',
			'images':[]
		}
	],
	display : function(){
		for(project in projects.projects){
			$('#projects').append(HTMLprojectStart);
			// Project Title
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			$('.project-entry:last').append(formattedTitle);
			// Project Dates
			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			$('.project-entry:last').append(formattedDates);
			// Project Description
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$('.project-entry:last').append(formattedDescription);
			// Project Images
			var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$('.project-entry:last').append(formattedImages);
		}
	}
};

var education = {
	'schools':[
		{
			'name': 'Pontificia Universidad Católica de Chile',
			'location': 'Santiago, Chile',
			'degree': 'Master in Science',
			'majors':["Wireless Communications", "IoT", "OFDM"],
			'dates': 2011,
			'url':'http://www.uc.cl'
		},
		{
			'name': 'Pontificia Universidad Católica de Chile',
			'location': 'Santiago, Chile',
			'degree': 'Civil Electric Engineer',
			'majors':["Telecommunications"],
			'dates': 2011,
			'url':'http://www.uc.cl'
		}
	],
	'onlineCourses':[
		{
			'title': 'Front-End Nanodegree',
			'school': 'Udacity',
			'date': 2015,
			'url': 'http://www.Udacity.com'
		},
		{
			'title': 'Full Stack Nanodegree',
			'school': 'Udacity',
			'date': 2015,
			'url': 'http://www.Udacity.com'
		}
	],
	display: function(){
		for(school in education.schools){
			$('#education').append(HTMLschoolStart);
			// School Name & Degree
			var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedTitle = formattedName + formattedDegree;
			$('.education-entry:last').append(formattedTitle);
			// School Dates
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			$('.education-entry:last').append(formattedDates);
			// School Location
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			$('.education-entry:last').append(formattedLocation);
			// School Major
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
			$('.education-entry:last').append(formattedMajor);
		}
		$('#education').append(HTMLonlineClasses);
		for(online in education.onlineCourses){
			$('#education').append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);
			var formattedOnlineTitle = formattedTitle + formattedSchool;
			$('.education-entry:last').append(formattedOnlineTitle);

			var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[online].date);
			$('.education-entry:last').append(formattedDates);

			var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[online].url);
			$('.education-entry:last').append(formattedURL);
		}
	}
};

function locationizer(obj) {
    var locations = [];
    for (job in obj.jobs){
        locations.push(obj.jobs[job].location);
    }
    return locations;
}

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);

// Add Internationalize button

$('#main').append(internationalizeButton);

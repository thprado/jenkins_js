var everJs = jQuery.noConflict();

if (everJs("#description").next().find("h1").length > 0){
	if (everJs("#description").next().find("h1").text() === "This folder is empty") {
		everJs("#description").next().find("div").addClass('noBackground');
	}
}


var everJs = jQuery.noConflict();

function editMultiBranchPipelineDiv() {
	if (everJs("#description").next().find("h1").length > 0){
		if (everJs("#description").next().find("h1").text() === "This folder is empty") {
			everJs("#description").next().find("div").addClass('noBackground');
		}
	}
}

everJs(document).ready(function(){
	console.log('Its running');
	editMultiBranchPipelineDiv();
});
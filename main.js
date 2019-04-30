var umaneJs = jQuery.noConflict();

function editMultiBranchPipelineDiv() {
	if (umaneJs("#description").next().find("h1").length > 0){
		if (umaneJs("#description").next().find("h1").text() === "This folder is empty") {
			umaneJs("#description").next().find("div").addClass('noBackground');
		}
	}
}

umaneJs(document).ready(function(){
	editMultiBranchPipelineDiv();
});
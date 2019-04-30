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



var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.id   = cssId;
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'https://gitcdn.link/repo/thprado/jenkins_css/v1.0/jenkins.css?v=' + Date.now();
link.media = 'all';
head.appendChild(link);
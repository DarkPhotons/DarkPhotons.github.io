menuid = {'#home':'nav1',
'#portfolio':'nav2',
'#contact':'nav3'};

pageid = {'#home':'homepage',
'#portfolio':'portfoliopage',
'#contact':'contactpage'};

hashhandler = function() {
	for (var key in menuid) {
			document.getElementById(menuid[key]).setAttribute('class', 'dbutton');
		}
	
	if (location.hash in menuid) {
		document.getElementById(menuid[location.hash]).setAttribute('class', 'dbutton dbuttonactive');
		setpage(location.hash);
	} else {
		document.getElementById('nav1').setAttribute('class', 'dbutton dbuttonactive');
		setpage('home');
	}
}

function setpage(p) {
	for (var key in pageid) {
			document.getElementById(pageid[key]).setAttribute('class', 'page');
		}
	if (p == 'home') {
		document.getElementById('homepage').setAttribute('class', 'page pageactive');
	} else {
		document.getElementById(pageid[p]).setAttribute('class', 'page pageactive');
	}
}

window.onload = hashhandler;

window.onhashchange = hashhandler;
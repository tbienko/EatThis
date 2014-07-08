EatThis.closeCallback =  function(){
	var node = this.parentNode;
	if(node === undefined) return;

	node.style.display = 'none';

	while (node.hasChildNodes()) {
		node.removeChild(node.lastChild);
	}
};

function changeStylesheet(name){
	var ss = document.getElementById('et-demo-style');
	ss.disabled = true;
	ss.href = 'style/eatthis-'+name+'.min.css';
	ss.disabled = false;
}

function reloadET(){
	var select = document.getElementById("demostyle");

	var val = select.options[select.selectedIndex].value;
	if(val != 'none'){
		changeStylesheet(val);
		EatThis.closeCallback.call(document.getElementById('et-close'));
		EatThis.infoText = document.getElementById("demotext").value;
		EatThis.closeText = document.getElementById("democlose").value;
		EatThis.show();
	}

	return false;
}

domready(function(){
	//script will show info on startup
	EatThis.closeCallback.call(document.getElementById('et-close'));

	var stylesheets = document.getElementsByClassName('demostyle');
	for (var i = 0; i < stylesheets.length; i++) {
		stylesheets[i].disabled = true;
	}

	var select = document.getElementById("demostyle");
	select.onchange = reloadET;

	var text = document.getElementById("demotext");
	text.value = EatThis.infoText;
	text.oninput = reloadET;

	var close = document.getElementById("democlose");
	close.value = EatThis.closeText;
	close.oninput = reloadET;
});
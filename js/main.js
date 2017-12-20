function ssEnable(mySheet){
	var change= false;
	var oldsheet = 0;
	for(var i=0; i<document.styleSheets.length;i++){
		if(document.styleSheets[i].disabled== false){
			oldsheet = i;
		}
		document.styleSheets[i].disabled = true;
		if(document.styleSheets[i].title == mySheet){
			document.styleSheets[i].disabled = false;
			change = true;
		}
		if(!change)document.styleSheets[oldsheets].disabled = false;
		return change;
	}
	function sheet(){
		var sheetName = prompt("Stylesheet Name?");
		if(!ssEnable(sheetName))alert("Not Found -- Original StyleSheet Retained");
	}
	window.onload = function(){
		document.getElementById("btn1").onclick = sheet;
		}
	}

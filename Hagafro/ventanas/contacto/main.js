var nav = document.getElementById("nav");
var logo = document.getElementById("logo");
var body = document.getElementById("body");
var y;
var y2;
window.onscroll = function() {
  y = window.scrollY;

  menuMovil();
  if (y > 70) {
  	nav.style.position = "fixed";
  	nav.style.width = 100 + "%";
  	nav.style.marginLeft = 0 + "px";
  	nav.style["boxShadow"] = "0 0 10px #000";
  	// document.getElementById("ul").style.height = 55 + "px";
  	// document.getElementById("li0").style.marginTop = 5 + "px";
  	// document.getElementById("li1").style.marginTop = 5 + "px";
  	// document.getElementById("li2").style.marginTop = 5 + "px";
  	// document.getElementById("li3").style.marginTop = 5 + "px";
  } else {
  	nav.style.position = "static";
  	nav.style.marginLeft = 10 + "vh";
  	nav.style.width = "auto";
  	nav.style["boxShadow"] = "0 0 0px #000";
  	document.getElementById("ul").style.height = "auto";
  	document.getElementById("li0").style.marginTop = 30 + "px";
  	document.getElementById("li1").style.marginTop = 30 + "px";
  	//document.getElementById("li2").style.marginTop = 30 + "px";
  	document.getElementById("li3").style.marginTop = 30 + "px";
  }
  setTimeout(function() {
  	y2 = y;
  }, 100);
};
function menuMovil(){
	if (y2 != y) {
		ul.style.height = 0 + "px";
		cont = 0;
	}
}
var ul = document.getElementById("ulMovil");
var cont = 0;
function menu(){
	cont++
	if (cont == 1) {
		abrirMenu();
	} else if (cont == 2) {
		cont = 0;
		cerrarMenu();
	}
}
function abrirMenu(){
	if (estado == 1) {
		ul.style.display = "block"
		setTimeout(function() {
			ul.style.height = 300 + "px";
		}, 30);
	} else {
		ul.style.height = 300 + "px";
	}

}
function cerrarMenu(){
	ul.style.height = 0 + "px";
}




setInterval(medir,100);
var estado = 0;
var alturaCon;
var anchoCon;
function medir(){
	alturaCon = document.getElementById("body").offsetHeight;
	anchoCon = document.getElementById("body").offsetWidth;
	if (anchoCon > 670) {
		ul.style.display = "none";
		ul.style.height =  0 + "px";
		cont = 0;
		estado = 1;
	}
}


window.onload = function(){
	document.getElementById("liM3").style.color = "#27AE60";
	document.getElementById("li3").style.color = "#27AE60";	
	document.getElementById("liM0").style.color ="#000";
	document.getElementById("li0").style.color ="#000";
};
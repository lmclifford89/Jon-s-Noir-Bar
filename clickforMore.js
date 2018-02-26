var hlink = document.getElementById("herelink"),
hdiv = document.getElementById("herediv");
hlink.addEventListener("click", function(event) {
	event.preventDefault();
	hdiv.style.display = (hdiv.style.display === "none") ? "block" :
	"none";
}, false);
hdiv.style.display = "none";

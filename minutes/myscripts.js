
function contact() {
		var a = document.getElementById("con").innerHTML;
		if(a == ""){
			var c = "MENU 21 <br> 213 314 1592<br> Los Angeles, Ca 90039" +
			"<br> catering@LAmenu21.com<br>Lamenu21.com"
			document.getElementById("con").innerHTML = c;
		}else
			document.getElementById("con").innerHTML = "";
		}
//format price with/out sales tax 9.5%
function cvtC(p){
	var s = " : ";
	 s+= Number(p.toFixed(2) ).toLocaleString();
	return s;
}

function calc() {

	//drinks
	const daysayear = 364; //7x52

	var cn = [
			"days", "weeks", "months", "years",
			"hours", "minutes", "seconds", "micros", "nano", "pico"

	]
	for (let i = 0; i < cn.length; i++) {
			document.getElementById( "c"+ (i+1) ).innerHTML = cn[i];
			// document.getElementById("cp"+ (i+1) ).innerHTML = getPrice(c[i], wtx);
			}

			// var hours = document.getElementById("hours").value;
			var minutes = document.getElementById("minutes").value;
			var seconds = document.getElementById("seconds").value = minutes*60;
			var hours = document.getElementById("hours").value = minutes /60;


	document.getElementById("cp1" ).innerHTML = cvtC(minutes/60/24);
	document.getElementById("cp2" ).innerHTML = cvtC(minutes/60/24/7);
	document.getElementById("cp3" ).innerHTML = cvtC(minutes/60/24/7/4); //monthly
	document.getElementById("cp4" ).innerHTML = cvtC(minutes/60/24/7/52); //year

	document.getElementById("cp5" ).innerHTML = cvtC(minutes/60);
	document.getElementById("cp6" ).innerHTML = cvtC(minutes*1);
	document.getElementById("cp7" ).innerHTML = cvtC(minutes*60);
	document.getElementById("cp8" ).innerHTML = cvtC(minutes*60*1000);
	document.getElementById("cp9" ).innerHTML = cvtC(minutes*60*1000000);
	document.getElementById("cp10" ).innerHTML = cvtC(minutes*60*1000*1000*1000);
}

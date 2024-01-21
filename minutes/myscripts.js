
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
	var daysayear = 365; //7x52

	var cn = [
			"days", "weeks", "months", "years",
			"hours", "minutes", "seconds", "micros", "nano", "pico", "...", "..."

	]
	for (let i = 0; i < cn.length; i++) {
			document.getElementById( "c"+ (i+1) ).innerHTML = cn[i];
			// document.getElementById("cp"+ (i+1) ).innerHTML = getPrice(c[i], wtx);
			}

			// var hours = document.getElementById("hours").value;
			var minutes = document.getElementById("minutes").value;
			minutes = Number(minutes);
			// var seconds = document.getElementById("seconds").value = minutes*60;
			// var hours = document.getElementById("hours").value = minutes /60;

var x = Date()
document.getElementById("cp11" ).innerHTML = x;
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


	var yn = [
		 "years", "months", "weeks", 	"days", "hours"
		 , "minutes", "seconds"

	]
	for (let i = 0; i < yn.length; i++) {
			document.getElementById( "y"+ (i+1) ).innerHTML = yn[i];
			// document.getElementById("cp"+ (i+1) ).innerHTML = getPrice(c[i], wtx);
			}

	var khp = 1.341;
	var year = document.getElementById("years").value;
	year = Number(year);
		// document.getElementById("yp1" ).innerHTML =  cvtC(year*khp	);


		document.getElementById("yp1" ).innerHTML =  cvtC(year*1	);
		document.getElementById("yp2" ).innerHTML =  cvtC(year*12	);
		document.getElementById("yp3" ).innerHTML =  cvtC(year*52	);
		document.getElementById("yp4" ).innerHTML =  cvtC(year*365	);
		document.getElementById("yp5" ).innerHTML =  cvtC(year*365*24	);
		document.getElementById("yp6" ).innerHTML =  cvtC(year*365*24*60	);
		document.getElementById("yp7" ).innerHTML =  cvtC(year*365*24*60*60	);

		document.getElementById("yp8" ).innerHTML =   year*365*24*60	;
}

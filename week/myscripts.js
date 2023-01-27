
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
	var s = "$";
	 s+= Number(p.toFixed(2) ).toLocaleString();
	return s;
}

function calc() {

	//drinks
	const daysayear = 364; //7x52
	var wtx = document.getElementById("tx").checked;
	var tt = wtx ? "Prices Include 9.5% Sales Tax. " : "+ 9.5% Sales Tax. "
		document.getElementById("tax").innerHTML = tt;


		var tt = document.getElementById("day").innerHTML;

		document.getElementById( "c1"  ).innerHTML = tt;
		//snacks
		var cn = [
			  "daily", "weekly", "monthly", "annual",
				"Open/week: ", "shifts/ week: ", "shift/worker",
				"Full cover xw: ", "Min #workers: ",
				//full Payroll
				"Daily: ", "Weekly", "Monthly", "Annual"
		]
		// for (let i = 0; i < cn.length; i++) {
		// 		document.getElementById( "c"+ (i+1) ).innerHTML = cn[i];
		// 		// document.getElementById("cp"+ (i+1) ).innerHTML = getPrice(c[i], wtx);
		// 		}

}

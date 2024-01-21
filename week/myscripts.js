
function contact() {
		var a = document.getElementById("con").innerHTML;
		if(a == ""){
			// var c = ". . ."
			// document.getElementById("con").innerHTML = c;
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
		var et = 0;
		var st = 0;
		for (let i = 0; i < 7; i++) {
				et += Number(document.getElementById( "e"+ (i+1) ).value);
				st += Number(document.getElementById( "s"+ (i+1) ).value);
				// document.getElementById("cp"+ (i+1) ).innerHTML = getPrice(c[i], wtx);
				}
			var c = et + ". . ." + st+ " ... profit: $" + (st-et)
					document.getElementById("con").innerHTML = c
			 	document.getElementById( "et").value = et;
			 	document.getElementById( "st").value = st;
}

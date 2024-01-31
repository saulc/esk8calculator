
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
function createTable(TestTitle, rows){
	var pre = '<div class="col-md"><table class="table table-hover table-borderless"><th class="col hd text-center" colspan="2">'
	var endtitle = '</th><tbody>'
	var endtable = '</tbody></table></div>'
	var pre1 = '<tr ><td class="col-md-7"><p class="mn" id="'
	var pre2 = '" ></p></td><td class="col-md-1"><p id="'
	var pre3 = '" class="pr"></p></td></tr>'
			var t = pre + TestTitle + endtitle ;
			for(let i =1; i<=rows; i++){
				t+= pre1 + 'aa' + i +pre2;
				t+=  'ab' + i + pre3;
			}
			t += endtable;
			return t;
}

function testTable(rows){
	return 'Test: ';
}

function calc() {

					document.getElementById("pp").innerHTML = createTable('New Table', 10);
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

				//test loop
				for (let i = 0; i < 10; i++) {
					  document.getElementById( "aa"+ (i+1) ).innerHTML = cn[i];
						document.getElementById( "ab"+ (i+1) ).innerHTML = i;
						}


					var hrt = document.getElementById("hrt").value;
					var hours = document.getElementById("hours").value;

					var workerspershift = document.getElementById("xw").value ;
					var hoursaday = document.getElementById("hoursaday").value;
					var shiftlen = document.getElementById("shiftlen").value;
					//snacks
					var cn = [
						  "daily", "weekly", "monthly", "annual",
							"Open/week: ", "shifts/ week: ", "shift/worker",
							"Full cover xw: ", "Min #workers: ",
							//full Payroll
							"Daily: ", "Weekly", "Monthly", "Annual"
					]
					for (let i = 0; i < cn.length; i++) {
							document.getElementById( "c"+ (i+1) ).innerHTML = cn[i];
							// document.getElementById("cp"+ (i+1) ).innerHTML = getPrice(c[i], wtx);
							}

					var anper = hrt * hours*52;
					var fw = (hoursaday*7)/hours;
					var minworkers = workerspershift*fw;

					document.getElementById("cp1" ).innerHTML = cvtC(hrt * shiftlen);
					document.getElementById("cp2" ).innerHTML = cvtC(hrt * hours);
					document.getElementById("cp3" ).innerHTML = cvtC(hrt * hours*4); //monthly
					document.getElementById("cp4" ).innerHTML = cvtC(anper); //year

					document.getElementById("cp5" ).innerHTML = hoursaday*7;
					document.getElementById("cp6" ).innerHTML = (hoursaday*7)/shiftlen;
					document.getElementById("cp7" ).innerHTML = (hours)/shiftlen;
					document.getElementById("cp8" ).innerHTML = fw.toFixed(2);
					document.getElementById("cp9" ).innerHTML = minworkers.toFixed(0)
					+ " / " + minworkers.toFixed(2);

					document.getElementById("cp10" ).innerHTML = cvtC((anper*minworkers)/daysayear);
					document.getElementById("cp11" ).innerHTML = cvtC((anper*minworkers)/52);
					document.getElementById("cp12" ).innerHTML = cvtC((anper*minworkers)/12); //monthly
					document.getElementById("cp13" ).innerHTML = cvtC(anper*minworkers); //year

				//Monthly

			var monthly = Number(document.getElementById( "monthly" ).value);
			var acm = Number(document.getElementById( "acm" ).value);
			var newm = Number(document.getElementById( "newm" ).value);
			var total = monthly*(newm+acm);
			document.getElementById("m1").innerHTML = "current Monthly: $";
			document.getElementById("mm1").innerHTML = cvtC(monthly*acm);
			document.getElementById("m2").innerHTML = "new Monthly: +$";
			document.getElementById("mm2").innerHTML = cvtC(monthly*newm);
			document.getElementById("m3").innerHTML = "total Monthly: +$";
			document.getElementById("mm3").innerHTML = cvtC(total);
			document.getElementById("m4").innerHTML = "annual: $";
			document.getElementById("mm4").innerHTML = cvtC(total*12);


			var sqft = Number(document.getElementById( "sqft" ).value);
			var sq = Number(document.getElementById( "sq" ).value);
			var rent = sqft*sq;

			var userper = sqft/50; //max capcity
			document.getElementById("a1").innerHTML = "Max capacity: ";
			document.getElementById("b1").innerHTML = userper;

			document.getElementById("m5").innerHTML = "montly Rent: $";
			document.getElementById("mm5").innerHTML = cvtC(rent);
			document.getElementById("m6").innerHTML = "annual rent: $";
			document.getElementById("mm6").innerHTML = cvtC(rent*12);
			document.getElementById("m7").innerHTML = "profit Montly: $";
			document.getElementById("mm7").innerHTML = cvtC(total-rent-(anper*minworkers)/12);
			document.getElementById("m8").innerHTML = "annual Profit: $";
			document.getElementById("mm8").innerHTML = cvtC((total-rent)*12-anper*minworkers);



}


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
	const daysayear = 346; //7x52
	var wtx = document.getElementById("tx").checked;
	var tt = wtx ? "Prices Include 9.5% Sales Tax. " : "+ 9.5% Sales Tax. "
		document.getElementById("tax").innerHTML = tt;


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

			//location
		var cn = [
			  "Annual Rate:", "Annual Total", "monthly", "weekly", "daily",
				"OverHead Day:", "OverHead week:", "OverHead month:", "OverHead year:",
				 "Fixed Costs: "

		]
		for (let i = 0; i < cn.length; i++) {
				document.getElementById( "item"+ (i+1) ).innerHTML = cn[i];
				// document.getElementById("cp"+ (i+1) ).innerHTML = getPrice(c[i], wtx);
				}
		var sqft = document.getElementById("sq").value;
		var monthrate = document.getElementById("monthlyrentper").value;
		var nn = document.getElementById("nn").value;
		var ae = document.getElementById("ae").value;
		ae = Number(ae);
		var fix =   ae +((sqft*monthrate)*12) + (anper*minworkers) ;

			document.getElementById("cc1" ).innerHTML = cvtC(monthrate*12);
			document.getElementById("cc2" ).innerHTML = cvtC(sqft*monthrate*12);
			document.getElementById("cc3" ).innerHTML = cvtC(sqft*monthrate);
			document.getElementById("cc4" ).innerHTML = cvtC((sqft*monthrate)/4);
			document.getElementById("cc5" ).innerHTML = cvtC((sqft*monthrate)/4/7);
			//overhead
	document.getElementById("cc6" ).innerHTML = cvtC( ((sqft*monthrate)/4/7) + (anper*minworkers)/daysayear);
	document.getElementById("cc7" ).innerHTML = cvtC( ((sqft*monthrate)/4) + (anper*minworkers)/52);
	document.getElementById("cc8" ).innerHTML = cvtC( ((sqft*monthrate)) + (anper*minworkers)/12);
	document.getElementById("cc9" ).innerHTML = cvtC( ((sqft*monthrate)*12) + (anper*minworkers));

	document.getElementById("cc10" ).innerHTML = cvtC(fix);

//Food

var cn = [
	"item1 cost %: ", "item2 cost %: ", "item3 cost %: " , "item4 cost %: "

]
for (let i = 0; i < cn.length; i++) {
	document.getElementById( "fa"+ (i+1) ).innerHTML = cn[i];
		// document.getElementById( "fb"+ (i+1) ).innerHTML = cn[i];
	}

var f1 = document.getElementById("f1").value;
var l1 = document.getElementById("lb1").value;
var f2 = document.getElementById("f2").value;
var l2 = document.getElementById("lb2").value;
var f3 = document.getElementById("f3").value;
var l3 = document.getElementById("lb3").value;
var f4 = document.getElementById("f4").value;
var l4 = document.getElementById("lb4").value;

var ds = f4*l4 + f3*l3 + f2*l2 + f1*l1;

	document.getElementById( "fb1").innerHTML =   (100*f1/l1).toFixed(2);
	document.getElementById( "fb2").innerHTML =   (100*f2/l2).toFixed(2);
	document.getElementById( "fb3").innerHTML =   (100*f3/l3).toFixed(2);
	document.getElementById( "fb4").innerHTML =   (100*f4/l4).toFixed(2);


		document.getElementById( "pa1").innerHTML= "Total cost: " + cvtC(f1*1000);
		document.getElementById( "pb1").innerHTML= "Total profit: " + cvtC((l1-f1)*1000);

		document.getElementById( "pa2").innerHTML= "Total cost: " + cvtC(f2*1000);
		document.getElementById( "pb2").innerHTML= "Total profit: " + cvtC((l2-f2)*1000);

		document.getElementById( "pa3").innerHTML= "Total cost: " + cvtC(f3*1000);
		document.getElementById( "pb3").innerHTML= "Total profit: " + cvtC((l3-f3)*1000);

		document.getElementById( "pa4").innerHTML= "Total cost: " + cvtC(f4*1000);
		document.getElementById( "pb4").innerHTML= "Total profit: " + cvtC((l4-f4)*1000);

	document.getElementById( "pc1").innerHTML= "Total Sale: " + cvtC(l1*1000);
	document.getElementById( "pp1").innerHTML	= "cost%: " + (l1/f1).toFixed(1) ;
	document.getElementById( "pd1").innerHTML = "Profit Per: " + cvtC(l1 - f1 );

	document.getElementById( "pc2").innerHTML= "Total Sale: " + cvtC(l2*1000);
	document.getElementById( "pp2").innerHTML	= "cost%: " + (l2/f2).toFixed(1) ;
	document.getElementById( "pd2").innerHTML = "Profit Per: " + cvtC(l2 - f2 );

	document.getElementById( "pc3").innerHTML= "Total Sale: " + cvtC(l3*1000);
	document.getElementById( "pp3").innerHTML	= "cost%: " + (l3/f3).toFixed(1) ;
	document.getElementById( "pd3").innerHTML = "Profit Per: " + cvtC(l3 - f3 );

	document.getElementById( "pc4").innerHTML= "Total Sale: " + cvtC(l4*1000);
	document.getElementById( "pp4").innerHTML	= "cost%: " + (l4/f4).toFixed(1) ;
	document.getElementById( "pd4").innerHTML = "Profit Per: " + cvtC(l4 - f4);

		var ts = Number(l1) + Number(l2) + Number(l3) + Number(l4);
		var tc = Number(f1) + Number(f2) + Number(f3) + Number(f4);
			ts = ts*1000;
			tc = tc *1000;
		document.getElementById("fca" ).innerHTML = "sellout total $: " + cvtC(ts);
		// var fcavg = (l1/f1) + l2/f2 + l3/f3 + l4/f4;
		var fcavg = (f1/l1) + f2/l2 + f3/l3 + f4/l4;
		fcavg /= 4; fcavg *= 100;
		document.getElementById("fcavg" ).innerHTML = "Average Costs: " +fcavg.toFixed(2) +"% ";

		document.getElementById("f" ).innerHTML = "sellout cost $: " + cvtC(tc);
				document.getElementById("favg" ).innerHTML = "sellout profit $: " + cvtC(ts-tc);
		  // var sellout = 0;
			// sellfout += l1+l2+l3+l4;
  // var sellout = ts/30;    //fixed daily

	sellout = document.getElementById( "som").value;
	sellout = Number(sellout);
	var totalportions = sellout/50;  //daily / avg price
	document.getElementById( "t1").innerHTML = "SellOut Total: "
	document.getElementById( "tt1").innerHTML = cvtC( sellout );

	document.getElementById( "t2").innerHTML = "Weekly SellOut: "
	document.getElementById( "tt2").innerHTML = cvtC(7*(  sellout));
	document.getElementById( "t3").innerHTML = "Monthly SellOut: "
	document.getElementById( "tt3").innerHTML = cvtC(52/12*7*(  sellout));
	document.getElementById( "t4").innerHTML = "Total Portions: "
	document.getElementById( "tt4").innerHTML = totalportions.toFixed(2);
	document.getElementById( "t5").innerHTML = "Avg Portions/hour: "
	document.getElementById( "tt5").innerHTML = ((totalportions)/hoursaday).toFixed(2);
	document.getElementById( "t6").innerHTML = "Avg mins/plate: "
	document.getElementById( "tt6").innerHTML = (60/((totalportions)/hoursaday)).toFixed(2);

	var wc = document.getElementById("wc").value;
	var tgc = document.getElementById("tgc").value;
	var bulkpercent = document.getElementById("bc").value;
	bulkpercent = bulkpercent/100;
	var bulk = bulkpercent*(f4*l4 + f3*l3 + f2*l2 + f1*l1);
	var td = Number(tgc)+Number(wc)+(1+bulkpercent)*(f4*l4 + f3*l3 + f2*l2 + f1*l1);
	var netover =  tc/30 + ae/daysayear  + ((sqft*monthrate)/4/7) + (anper*minworkers)/daysayear;
	//daily ex + rent + payroll
	var profit =  sellout - netover;
	var evenpercent = (100*netover/sellout);
	var netrev =  sellout*daysayear; //*profit+ netover*7*52;

	document.getElementById( "t7").innerHTML = "Daily Spend: "
	document.getElementById( "tt7").innerHTML = cvtC( ds );

	document.getElementById( "t8").innerHTML = "Bulk Spend: "+ "@ " + bulkpercent*100 + "% "
	document.getElementById( "tt8").innerHTML = cvtC( bulk );
	document.getElementById( "t9").innerHTML = "Total Daily Spend: "
	document.getElementById( "tt9").innerHTML = cvtC( td );
	document.getElementById( "t10").innerHTML = "Net Overhead Daily: "
	document.getElementById( "tt10").innerHTML = cvtC( netover );
	document.getElementById( "t11").innerHTML = "Net Overhead Weekly: "
	document.getElementById( "tt11").innerHTML = cvtC( netover*7 );
	document.getElementById( "t12").innerHTML = "Net Overhead Monthy: "
	document.getElementById( "tt12").innerHTML = cvtC( netover*daysayear/12 );
	document.getElementById( "t13").innerHTML = "Net Overhead Year: "
	document.getElementById( "tt13").innerHTML = cvtC( netover*daysayear );
	document.getElementById( "t14").innerHTML = "Sellout Profit: "
	document.getElementById( "tt14").innerHTML = cvtC( profit);
	document.getElementById( "t15").innerHTML = "breakeven % : "
	document.getElementById( "tt15").innerHTML = evenpercent.toFixed(2)+"% ";
	document.getElementById( "t16").innerHTML = "Portions : "
	document.getElementById( "tt16").innerHTML = (evenpercent/100*totalportions).toFixed(2) ;

	document.getElementById( "t17").innerHTML = "Breakeven projection: "
	document.getElementById( "tt17").innerHTML = cvtC(daysayear*(evenpercent/100)*sellout);

	document.getElementById( "t18").innerHTML = "Profit ceiling: "
	document.getElementById( "tt18").innerHTML = cvtC( daysayear*profit);
	document.getElementById( "t19").innerHTML = "Net Revenue: "
	document.getElementById( "tt19").innerHTML = cvtC( netrev );
//monthy year totals
	document.getElementById("e1" ).innerHTML = cvtC(td*daysayear/12);
	document.getElementById("ee1" ).innerHTML = cvtC(td*daysayear);

			document.getElementById("e2" ).innerHTML = "Foodcost/ex:"
			document.getElementById("ee2" ).innerHTML = (100*td/netover).toFixed(2) +"% ";
			//labor costs %
			document.getElementById("e3" ).innerHTML = "Work/ex:"
			document.getElementById("ee3" ).innerHTML = (100*(anper*minworkers)/(netover*daysayear)).toFixed(2) +"% ";
			//rent %
			document.getElementById("e4" ).innerHTML = "Rent/ex:"
			document.getElementById("ee4" ).innerHTML = (100*(sqft*monthrate*12)/(netover*daysayear)).toFixed(2) +"% ";
			document.getElementById("e5" ).innerHTML = "Other/ex:"
			document.getElementById("ee5" ).innerHTML = (100*(ae/(netover*daysayear))).toFixed(2) +"% ";

		document.getElementById("e6" ).innerHTML = "Total Foodcost:"
		document.getElementById("ee6" ).innerHTML = (td*daysayear/netrev*100).toFixed(2) +"% ";
		//labor costs %
		document.getElementById("e7" ).innerHTML = "Work:"
		document.getElementById("ee7" ).innerHTML = ((anper*minworkers)/netrev*100).toFixed(2) +"% ";
		//rent %
		document.getElementById("e8" ).innerHTML = "Rent:"
		document.getElementById("ee8" ).innerHTML = ((sqft*monthrate*12)/netrev*100).toFixed(2) +"% ";

			var selloutrate = document.getElementById("sor").value / 100;
			var wdrev = selloutrate*sellout;
			var wdprofit = selloutrate*sellout-netover;

			document.getElementById("s1" ).innerHTML  = "Weighted Rev:";
			document.getElementById("ss1" ).innerHTML = "Weighted Profit:";
			document.getElementById("s2" ).innerHTML  = cvtC(wdrev);
			document.getElementById("s3" ).innerHTML = cvtC(wdrev*7);
			document.getElementById("s4" ).innerHTML = cvtC(wdrev*7*52/12);
			document.getElementById("s5" ).innerHTML = cvtC(wdrev*7*52);

			document.getElementById("ss2" ).innerHTML = cvtC(wdprofit);
			document.getElementById("ss3" ).innerHTML = cvtC(wdprofit*7);
			document.getElementById("ss4" ).innerHTML = cvtC(wdprofit*7*52/12);
			document.getElementById("ss5" ).innerHTML = cvtC(wdprofit*7*52);

			document.getElementById( "s6").innerHTML = "Effective Margin: ";
			document.getElementById( "ss6").innerHTML = (100*wdprofit/wdrev).toFixed(2)+"% ";

			document.getElementById( "s7").innerHTML = "Weighted Portions: ";
			document.getElementById( "ss7").innerHTML = (selloutrate*totalportions).toFixed(2) +"/" + totalportions.toFixed(2);
			document.getElementById( "s8").innerHTML = "Avg Portions/hour: ";
			document.getElementById( "ss8").innerHTML = ((selloutrate*totalportions)/hoursaday).toFixed(2);
			document.getElementById( "s9").innerHTML = "Avg mins/plate: ";
			document.getElementById( "ss9").innerHTML = (60/((selloutrate*totalportions)/hoursaday)).toFixed(2);

}

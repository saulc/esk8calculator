
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
				 "Fixed Costs: " , 'Avg Price:'

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
	, "item5 cost %: " , "item6 cost %: ", "item7 cost %: " , "item8 cost %: "

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
var f5 = document.getElementById("f5").value;
var l5 = document.getElementById("lb5").value;
var f6 = document.getElementById("f6").value;
var l6 = document.getElementById("lb6").value;
var f7 = document.getElementById("f7").value;
var l7 = document.getElementById("lb7").value;
var f8 = document.getElementById("f8").value;
var l8 = document.getElementById("lb8").value;



	document.getElementById( "fb1").innerHTML =   (100*f1/l1).toFixed(2);
	document.getElementById( "fb2").innerHTML =   (100*f2/l2).toFixed(2);
	document.getElementById( "fb3").innerHTML =   (100*f3/l3).toFixed(2);
	document.getElementById( "fb4").innerHTML =   (100*f4/l4).toFixed(2);
	document.getElementById( "fb5").innerHTML =   (100*f5/l5).toFixed(2);
	document.getElementById( "fb6").innerHTML =   (100*f6/l6).toFixed(2);
	document.getElementById( "fb7").innerHTML =   (100*f7/l7).toFixed(2);
	document.getElementById( "fb8").innerHTML =   (100*f8/l8).toFixed(2);

					var mp = document.getElementById("mp").value;

		document.getElementById( "pa1").innerHTML= "Total cost: " + cvtC(f1*mp);
		document.getElementById( "pb1").innerHTML= "Total profit: " + cvtC((l1-f1)*mp);

		document.getElementById( "pa2").innerHTML= "Total cost: " + cvtC(f2*mp);
		document.getElementById( "pb2").innerHTML= "Total profit: " + cvtC((l2-f2)*mp);

		document.getElementById( "pa3").innerHTML= "Total cost: " + cvtC(f3*mp);
		document.getElementById( "pb3").innerHTML= "Total profit: " + cvtC((l3-f3)*mp);

		document.getElementById( "pa4").innerHTML= "Total cost: " + cvtC(f4*mp);
		document.getElementById( "pb4").innerHTML= "Total profit: " + cvtC((l4-f4)*mp);

		document.getElementById( "pa5").innerHTML= "Total cost: " + cvtC(f5*mp);
		document.getElementById( "pb5").innerHTML= "Total profit: " + cvtC((l5-f5)*mp);

		document.getElementById( "pa6").innerHTML= "Total cost: " + cvtC(f6*mp);
		document.getElementById( "pb6").innerHTML= "Total profit: " + cvtC((l6-f6)*mp);

		document.getElementById( "pa7").innerHTML= "Total cost: " + cvtC(f7*mp);
		document.getElementById( "pb7").innerHTML= "Total profit: " + cvtC((l7-f7)*mp);

		document.getElementById( "pa8").innerHTML= "Total cost: " + cvtC(f8*mp);
		document.getElementById( "pb8").innerHTML= "Total profit: " + cvtC((l8-f8)*mp);

	document.getElementById( "pc1").innerHTML= "Total Sale: " + cvtC(l1*mp);
	document.getElementById( "pp1").innerHTML	= "value%: " + (l1/f1).toFixed(1) ;
	document.getElementById( "pd1").innerHTML = "Profit Per: " + cvtC(l1 - f1 );

	document.getElementById( "pc2").innerHTML= "Total Sale: " + cvtC(l2*mp);
	document.getElementById( "pp2").innerHTML	= "value%: " + (l2/f2).toFixed(1) ;
	document.getElementById( "pd2").innerHTML = "Profit Per: " + cvtC(l2 - f2 );

	document.getElementById( "pc3").innerHTML= "Total Sale: " + cvtC(l3*mp);
	document.getElementById( "pp3").innerHTML	= "value%: " + (l3/f3).toFixed(1) ;
	document.getElementById( "pd3").innerHTML = "Profit Per: " + cvtC(l3 - f3 );

	document.getElementById( "pc4").innerHTML= "Total Sale: " + cvtC(l4*mp);
	document.getElementById( "pp4").innerHTML	= "value%: " + (l4/f4).toFixed(1) ;
	document.getElementById( "pd4").innerHTML = "Profit Per: " + cvtC(l4 - f4);

	document.getElementById( "pc5").innerHTML= "Total Sale: " + cvtC(l5*mp);
	document.getElementById( "pp5").innerHTML	= "value%: " + (l5/f5).toFixed(1) ;
	document.getElementById( "pd5").innerHTML = "Profit Per: " + cvtC(l5 - f5);

	document.getElementById( "pc6").innerHTML= "Total Sale: " + cvtC(l6*mp);
	document.getElementById( "pp6").innerHTML	= "value%: " + (l6/f6).toFixed(1) ;
	document.getElementById( "pd6").innerHTML = "Profit Per: " + cvtC(l6 - f6);

		document.getElementById( "pc7").innerHTML= "Total Sale: " + cvtC(l7*mp);
		document.getElementById( "pp7").innerHTML	= "value%: " + (l7/f7).toFixed(1) ;
		document.getElementById( "pd7").innerHTML = "Profit Per: " + cvtC(l7 - f7);

			document.getElementById( "pc8").innerHTML= "Total Sale: " + cvtC(l8*mp);
			document.getElementById( "pp8").innerHTML	= "value  %: " + (l8/f8).toFixed(1) ;
			document.getElementById( "pd8").innerHTML = "Profit Per: " + cvtC(l8 - f8);

				for(let i=0; i<4; i++){
				document.getElementById("x"+(i+1) ).innerHTML = "resellx"+mp;
			}


		var ts = Number(l1) + Number(l2) + Number(l3) + Number(l4)
		+ Number(l5)+ Number(l6)+ Number(l7)+ Number(l8);
		var tc = Number(f1) + Number(f2) + Number(f3) + Number(f4)
		+ Number(f5)+ Number(f6)+ Number(f7)+ Number(f8);
			ts = ts*mp;
			tc = tc *mp;
			var avgpr = ts/mp/8;
			document.getElementById( "som").value = avgpr;
			document.getElementById( "som").disabled = true;
				document.getElementById("cc11" ).innerHTML = cvtC(avgpr);
		document.getElementById("fca" ).innerHTML = "sellout total $: " + cvtC(ts);
		// var fcavg = (l1/f1) + l2/f2 + l3/f3 + l4/f4;
		var fcavg = (f1/l1) + f2/l2 + f3/l3 + f4/l4;
		fcavg /= 4; fcavg *= 100;
		document.getElementById("fcavg" ).innerHTML = "Average Costs: " +fcavg.toFixed(2) +"% ";

		document.getElementById("f" ).innerHTML = "sellout cost $: " + cvtC(tc);
		document.getElementById("favg" ).innerHTML = "sellout profit $: " + cvtC(ts-tc);


		document.getElementById("fca1" ).innerHTML = "sellout total $: " + cvtC(ts);
		var fcavg1 = (f5/l5) + f6/l6 + f7/l7 + f8/l8;
		fcavg1 /= 4; fcavg1 *= 100;
		document.getElementById("fcavg1" ).innerHTML = "Average Costs: " +fcavg1.toFixed(2) +"% ";
		document.getElementById("ff" ).innerHTML = "sellout cost $: " + cvtC(tc);
		document.getElementById("favg1" ).innerHTML = "sellout profit $: " + cvtC(ts-tc);

		var fcavg2 = (fcavg1+fcavg)/2;
		document.getElementById("fcavg2" ).innerHTML = "Average Costs: " +fcavg2.toFixed(2) +"% ";

			var selloutrate = document.getElementById("sor").value / 100;


		  // var sellout = 0;
			// sellout += l1+l2+l3+l4;
  var sellout = ts/30;    //fixed daily

	// var avgpr = document.getElementById( "som").value;
	sellout = Number(sellout);
	var totalportions = sellout/avgpr;  //daily / avg price
	document.getElementById( "t1").innerHTML = "SellOut Total: "
	document.getElementById( "tt1").innerHTML = cvtC( sellout );

	document.getElementById( "t2").innerHTML = "Weekly SellOut: "
	document.getElementById( "tt2").innerHTML = cvtC(7*(  sellout));
	document.getElementById( "t3").innerHTML = "Monthly SellOut: "
	document.getElementById( "tt3").innerHTML = cvtC(52/12*7*(  sellout));
	document.getElementById( "t4").innerHTML = "Total Portions: "
	document.getElementById( "tt4").innerHTML = totalportions.toFixed(2);
	document.getElementById( "t5").innerHTML = "Avg Portions/hour: "
	document.getElementById( "tt5").innerHTML = ((totalportions)/(hoursaday)).toFixed(2);
	document.getElementById( "t6").innerHTML = "Avg sales per month/year "
	document.getElementById( "tt6").innerHTML = ((totalportions)*daysayear/12).toFixed(1) + "/"+ ((totalportions)*daysayear).toFixed(2);

	var wc = document.getElementById("wc").value;
	var tgc = document.getElementById("tgc").value;
	var bulkpercent = document.getElementById("bc").value;
	bulkpercent = bulkpercent/100;
	var bulk = bulkpercent*ts;
	var td = Number(tgc)+Number(wc)+(1+bulkpercent)*tc/30+ 12*tc/daysayear;


	var netrev =  ts*12; //*profit+ netover*7*52;
	var netover =  tc*12   + fix;
	// var netover = netover/ 7;

	var wdrev = selloutrate*netrev;
	var wdprofit = wdrev-netover;//daily ex + rent + payroll
	var profit =  netrev - netover  ;
	var evenpercent = (100*netover/(ts*12));

	document.getElementById( "t7").innerHTML = "overhead annual: "
	document.getElementById( "tt7").innerHTML = cvtC(  netover );

	document.getElementById( "t8").innerHTML = "Bulk Spend: "+ "@ " + bulkpercent*100 + "% "
	document.getElementById( "tt8").innerHTML = cvtC( bulk );
	document.getElementById( "t9").innerHTML = "Total Daily Spend: "
	document.getElementById( "tt9").innerHTML = cvtC( td );
	document.getElementById( "t10").innerHTML = "Net Overhead Daily: "
	document.getElementById( "tt10").innerHTML = cvtC( netover/daysayear );
	document.getElementById( "t11").innerHTML = "Net Overhead Weekly: "
	document.getElementById( "tt11").innerHTML = cvtC( netover/daysayear*7 );
	document.getElementById( "t12").innerHTML = "Net Overhead Monthy: "
	document.getElementById( "tt12").innerHTML = cvtC( netover/12 );
	document.getElementById( "t13").innerHTML = "Net Overhead Year: "
	document.getElementById( "tt13").innerHTML = cvtC( netover );
	document.getElementById( "t14").innerHTML = "Sellout Profit: "
	document.getElementById( "tt14").innerHTML = cvtC( (ts-tc)*12-fix);
	document.getElementById( "t15").innerHTML = "breakeven % : "
	document.getElementById( "tt15").innerHTML = evenpercent.toFixed(2)+"% ";
	document.getElementById( "t16").innerHTML = "Portions : "
	document.getElementById( "tt16").innerHTML = (evenpercent/100*totalportions).toFixed(2) ;

	document.getElementById( "t17").innerHTML = "Breakeven projection: "
	document.getElementById( "tt17").innerHTML = cvtC(daysayear*(evenpercent/100)*sellout);

	document.getElementById( "t18").innerHTML = "Profit ceiling: "
	document.getElementById( "tt18").innerHTML = cvtC( profit);
	document.getElementById( "t19").innerHTML = "Net Revenue: "
	document.getElementById( "tt19").innerHTML = cvtC( netrev );
//monthy year totals
	document.getElementById("e1" ).innerHTML = cvtC(td*daysayear/12);
	document.getElementById("ee1" ).innerHTML = cvtC(td*daysayear);

			document.getElementById("e2" ).innerHTML = "Itemcost/ex:"
			document.getElementById("ee2" ).innerHTML = (100*td/netover).toFixed(2) +"% ";
			//labor costs %
			document.getElementById("e3" ).innerHTML = "Work/ex:"
			document.getElementById("ee3" ).innerHTML = (100*(anper*minworkers)/(netover)).toFixed(2) +"% ";
			//rent %
			document.getElementById("e4" ).innerHTML = "Rent/ex:"
			document.getElementById("ee4" ).innerHTML = (100*(sqft*monthrate*12)/(netover)).toFixed(2) +"% ";
			document.getElementById("e5" ).innerHTML = "Other/ex:"
			document.getElementById("ee5" ).innerHTML = (100*(ae/(netover))).toFixed(2) +"% ";

		document.getElementById("e6" ).innerHTML = "Total Itemcost:"
		document.getElementById("ee6" ).innerHTML = (td*daysayear/netrev*100).toFixed(2) +"% ";
		//labor costs %
		document.getElementById("e7" ).innerHTML = "Work:"
		document.getElementById("ee7" ).innerHTML = ((anper*minworkers)/netrev*100).toFixed(2) +"% ";
		//rent %
		document.getElementById("e8" ).innerHTML = "Rent:"
		document.getElementById("ee8" ).innerHTML = ((sqft*monthrate*12)/netrev*100).toFixed(2) +"% ";


			document.getElementById("s1" ).innerHTML  = "Weighted Rev:";
			document.getElementById("ss1" ).innerHTML = "Weighted Profit:";
			document.getElementById("s2" ).innerHTML  = cvtC(wdrev/daysayear);
			document.getElementById("s3" ).innerHTML = cvtC(wdrev/52);
			document.getElementById("s4" ).innerHTML = cvtC(wdrev/12);
			document.getElementById("s5" ).innerHTML = cvtC(wdrev);

			document.getElementById("ss2" ).innerHTML = cvtC(wdprofit/daysayear);
			document.getElementById("ss3" ).innerHTML = cvtC(wdprofit/52);
			document.getElementById("ss4" ).innerHTML = cvtC(wdprofit/12);
			document.getElementById("ss5" ).innerHTML = cvtC(wdprofit);

			document.getElementById( "s6").innerHTML = "Effective Margin: ";
			document.getElementById( "ss6").innerHTML = (100*wdprofit/wdrev).toFixed(2)+"% ";

			document.getElementById( "s7").innerHTML = "Weighted Portions: ";
			document.getElementById( "ss7").innerHTML = (selloutrate*totalportions).toFixed(2) +"/" + totalportions.toFixed(2);
			document.getElementById( "s8").innerHTML = "Avg Portions/hour: ";
			document.getElementById( "ss8").innerHTML = ((selloutrate*totalportions)/hoursaday).toFixed(2) + "/"+ ((selloutrate*totalportions)*daysayear).toFixed(2);
			document.getElementById( "s9").innerHTML = "Avg mins/sale: ";
			document.getElementById( "ss9").innerHTML = (60/((selloutrate*totalportions)/hoursaday)).toFixed(2);

}


function contact() {
			var c = ["213 314 1592", "Los Angeles, Ca 90039",
			"catering@LAmenu21.com","Lamenu21.com"];

		for (let i = 0; i < c.length; i++)
			document.getElementById("cn"+i).innerHTML = c[i];
		}

//format price with/out sales tax 9.5%
function getPrice(p, tx){
	var s = "$";
	var c = 0;
	if(tx) s+= p.toFixed(0);
	else{
	c += (p*.905);
	c += (p*.095);
		 s += (p*.905).toFixed(2);
		  s += " + " + (p*.095).toFixed(3);
 		  s += " = " + c.toFixed(2);
		}
	return s;
}

function show(dat){
	var t = "";
	for(i in dat) t += dat[i];
	return t;
}

function sc() {
	 var pre = 	"INSERT INTO menu (name, quantity) VALUES ('";
	 var po = "', 0 );<br>";
		var d = ["CREATE TABLE menu (id INTEGER PRIMARY KEY, name char(100) NOT NULL, quantity INTEGER);<br>"
		];
		for(i in pl) d.push(pre+pl[i]+po)
		for(i in san) d.push(pre+san[i]+po)
		for(i in a) d.push(pre+a[i]+po)
		for(i in cn) d.push(pre+cn[i]+po)
		for(i in v) d.push(pre+v[i]+po)
document.getElementById("table").innerHTML = show(d);

}
// 				d.push(pl);
// 				d.push(san);
// 				d.push(a);
// 				d.push(cn);
// 				d.push(v);
// 	document.getElementById("table").innerHTML = d;
//
// }

		const pl = [ "Baseball Steak and Garlic Mashed Potatoes",
							"Filet Mignon with Potatoes Au Gratin",
							"Grilled Chicken with Potatoes Au Gratin",
							"Seared Salmon and Croquettes",
							"Scallops and Linguine with white wine sauce",
							"Shrimp and Linguine",
							"Chicken"
						];
			var p = [23, 33, 26, 31, 31, 24, 25 ];
			const pd = [
							"Seared Top Sirloin with Garlic and Rosemary Mashed Potatoes."
							,"Seared tenderloin with scalloped potatoes in Béchamel Cream sauce."
							, "Grilled Chicken breast with Roasted scalloped potatoes."
							,"Crispy pan seared Salmon filet with panko crusted SweetPotato balls."

						]

							var sn = [14, 14, 16, 16, 21, 15, 15 ];
							var san = ["Regular", "Classic", "Cali", "Western", "Loaded", "Wrap", "Sliders"];
							var sd = [ "Spinach, Cucumber, grilled onion and tamato.",
												"Romain lettuce, tomato, onoins",
												"Roasted Jalapenos and Avacado",
												"Bacon, Fried Onions and BBQ Sauce",
												"E - All of the above",
												"Wrapped in Romain",
												"3 Sliders - 1 style"
									]

					var c = [ 7, 7, 7, 6, 5, 5, 5];
					var cn = [
						 "House Salad",
						 "Sauted Vegetables",
						 "Squash Mozzarella sticks",
						 "Onion Rings",
						 "SweetPotato Fries",
						 "Carrot Fries",
						 "Fries"
					]

									//app
				var ap = [11, 13, 10, 11, 11];
				const a = [ "Shrimp Ceviche", "Seafood Cakes", "Potato Skins",
				"Fried Shrimp with Fries", "Chicken Strips"];
				const ad = [" ",
								"Shrimp, Fish and ..",
								"Bacon and Cheddar mash in a crispy potato skin chip",
									];
					var vp = [15, 13]
						const v = [ "Sauted Vegetables and Mixed KimChi","Sauted Vegetables"];
						const vd = ["squash, peppers, onoins, artichokes, cucumber, sprouts, garlic sauce",
						"Mushrooms, squash, peppers, onoins, artichokes "]

function calc() {

	//drinks
contact();
	var wtx = document.getElementById("tx").checked;
	var tt = wtx ? "Prices Include 9.5% Sales Tax. " : "+ 9.5% Sales Tax. "
		document.getElementById("tax").innerHTML = tt;
	var d1 = 3;
	var d2 = 5;
	document.getElementById("d1").innerHTML = getPrice(d1, wtx);
	document.getElementById("d2").innerHTML = getPrice(d2, wtx);
//plates

		for (let i = 0; i < p.length; i++) {
				document.getElementById( "item"+ (i+1) ).innerHTML = pl[i];
				document.getElementById("item"+ (i+1)+"price" ).innerHTML = getPrice(p[i], wtx);
				document.getElementById("item"+ (i+1)+"des" ).innerHTML = pd[i];
				}

		for (let i = 0; i < sn.length; i++) {
				document.getElementById( "s"+ (i+1) ).innerHTML = san[i];
				document.getElementById("sp"+ (i+1) ).innerHTML = getPrice(sn[i], wtx);
				document.getElementById("sd"+ (i+1) ).innerHTML = sd[i];
				}

		//snacks
		for (let i = 0; i < cn.length; i++) {
				document.getElementById( "c"+ (i+1) ).innerHTML = cn[i];
				document.getElementById("cp"+ (i+1) ).innerHTML = getPrice(c[i], wtx);
				}

				//Appetizers
			for (let i = 0; i < a.length; i++) {
					document.getElementById( "a" + (i+1) ).innerHTML = a[i];
					document.getElementById("ap"+ (i+1) ).innerHTML = getPrice(ap[i], wtx);
					document.getElementById("ad"+ (i+1) ).innerHTML = ad[i];
					}

		//veggie
		for (let i = 0; i < vp.length; i++) {
				document.getElementById( "v" + (i+1) ).innerHTML = v[i];
				document.getElementById("vp"+ (i+1) ).innerHTML = getPrice(vp[i], wtx);
				document.getElementById("vd"+ (i+1) ).innerHTML = vd[i];
				}


}

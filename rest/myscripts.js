
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
function getPrice(p, tx){
	var s = "$";
	if(tx) s+= p.toFixed(0);
	else s += (p*.905).toFixed(2);
	return s;
}

function calc() {

	//drinks

	var wtx = document.getElementById("tx").checked;
	var tt = wtx ? "Prices Include 9.5% Sales Tax. " : "+ 9.5% Sales Tax. "
		document.getElementById("tax").innerHTML = tt;
	var d1 = 3;
	var d2 = 5;
	document.getElementById("d1").innerHTML = getPrice(d1, wtx);
	document.getElementById("d2").innerHTML = getPrice(d2, wtx);
//plates
		var p = [24, 19, 19, 17, 17, 17, 19 ];
		const pl = [ "Seared Ahi Tuna with Rice",
									"Swordfish Filet with SweetPotato Fries",
									"Seared Salmon with Rice",
									"Grilled Chicken with Rice",
									"bbq Chicken drumsticks with Fries",
									"Roasted Pork with Rice"
								];


	const pd = [
			"Fresh Ahi seared and sliced served over rice. "
			,"Seared Swordfish with grilled squash and rice"
			,"Crispy pan seared Salmon filet with white or brown rice."
			,"Marinated chicken breast with White or Brown Rice"
			, "Two grilled legs finished in spicy bbq sauce with Regular, SweetPotato or Carrot Fries"
			, "Slow roasted shredded pork shoulder with white or brown rice."
		]

		for (let i = 0; i < p.length; i++) {
				document.getElementById( "item"+ (i+1) ).innerHTML = pl[i];
				document.getElementById("item"+ (i+1)+"price" ).innerHTML = getPrice(p[i], wtx);
				document.getElementById("item"+ (i+1)+"des" ).innerHTML = pd[i];
				}

		//Sandwiches
		// const bitem = [
		// 	{ name:"LemonPepper Tuna", price:17,
		// 		des:"Seasoned and Seared ahi Tuna with lemon aioli" } ,
		// 	{ name:"Swordfish", price:16,
		// 		des:"Seared Swordfish" } ,
		// 	{ name:"Salmon", price:15,
		// 		des:"Seared Salmon" } ,
		// 	{ name:"Spicy bbq Pork", price:14,
		// 				des:"Seared Salmon" } ,

	var sn = [17, 12, 12, 14, 15, 11, 15 ];
	var san = ["LemonPepper Tuna", "Swordfish", "Salmon",
 							"Spicy bbq Pork" , "Spicy Chicken", "Classic Chicken"];
	var sd = [ "Seasoned and Seared ahi Tuna with lemon aioli",
						"Seared Swordfish with with grilled onoins and ..",
						"Seared Salmon with with Spinach, onion and tamato.",
						"shredded pork in spicy bbq sauce and slaw.",
						"Grilled chicken leg meat with spicy bbq sauce cucumber, tomato, Spinach",
						"Grilled Chicken Brest with romain lettuce, tomato, onoins",
						"..."
			]


		for (let i = 0; i < sn.length; i++) {
				document.getElementById( "s"+ (i+1) ).innerHTML = san[i];
				document.getElementById("sp"+ (i+1) ).innerHTML = getPrice(sn[i], wtx);
				document.getElementById("sd"+ (i+1) ).innerHTML = sd[i];
				}

		//snacks
		var c = [ 7, 7, 7, 5, 5, 6, 5];
		var cn = [
			"Salmon Bites",
			"Spicy Fried Chicken Bites",
			 "Spicy Pork Sliders",
			 "Spring Rolls",
			 "SeaWeed Rolls",
			 "House Salad",
			 "Fries"
		]
		for (let i = 0; i < cn.length; i++) {
				document.getElementById( "c"+ (i+1) ).innerHTML = cn[i];
				document.getElementById("cp"+ (i+1) ).innerHTML = getPrice(c[i], wtx);
				}

		//veggie
		var vp = [15, 13]
		const v = [ "Sauted Vegetables and Mixed KimChi","Sauted Vegetables"];
		const vd = ["Mushrooms, squash, peppers, onoins, artichokes; Spinach, cucumber, sprouts, garlic with light Spicy korean sauce",
		"Mushrooms, squash, peppers, onoins, artichokes "]
		for (let i = 0; i < vp.length; i++) {
				document.getElementById( "v" + (i+1) ).innerHTML = v[i];
				document.getElementById("vp"+ (i+1) ).innerHTML = getPrice(vp[i], wtx);
				document.getElementById("vd"+ (i+1) ).innerHTML = vd[i];
				}


}

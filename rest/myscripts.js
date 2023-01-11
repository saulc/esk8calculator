
function contact() {
		var a = document.getElementById("con").innerHTML;
		if(a == ""){
	var c = "MENU 21 <br> 213 314 1592<br> Los Angeles, Ca 90039" +
	"<br> catering@LAmenu21.com<br>Lamenu21.com"
	document.getElementById("con").innerHTML = c;
}else
	document.getElementById("con").innerHTML = "";
}

function calc() {

	//drinks
	var d1 = 3;
	var d2 = 5;
	document.getElementById("d1").innerHTML = "$"+d1.toFixed(0);
	document.getElementById("d2").innerHTML = "$"+d2.toFixed(0);
//plates
		var p = [21, 19, 19, 17, 17, 17, 19 ];
		const pl = [ "Seared Ahi Tuna with Rice",
									"Swordfish Filet with SweetPotato Fries",
									"Seared Salmon with Rice",
									"Grilled Chicken with Rice",
									"bbq Chicken drumsticks with Fries",
									"Roasted Pork with Rice"];
	const pd = [	"Fresh Ahi seared and sliced served over rice. "
			,"Seared Swordfish with grilled squash and rice"
			,"Crispy pan seared Salmon filet with white or brown rice."
			,"Marinated chicken breast with White or Brown Rice"
			, "Two grilled legs finished in spicy bbq sauce with Regular, SweetPotato or Carrot Fries"
			, "Slow roasted shredded pork shoulder with white or brown rice."
		]

		for (let i = 0; i < p.length; i++) {
				document.getElementById( "item"+ (i+1) ).innerHTML = pl[i];
				document.getElementById("item"+ (i+1)+"price" ).innerHTML = "$"+p[i].toFixed(0);
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
				document.getElementById("sp"+ (i+1) ).innerHTML = "$"+sn[i].toFixed(0);
				document.getElementById("sd"+ (i+1) ).innerHTML = sd[i];
				}

		//snacks
		var c = [ 7, 7, 7, 5, 5, 6, 5];
		var cn = [
			"Spicy Fried Chicken Bites",
			 "Spicy Pork Sliders",
			 "Salmon Bites",
			 "Spring Roll",
			 "KimBap",
			 "House Salad",
			 "Fries"
		]
		for (let i = 0; i < sn.length; i++) {
				document.getElementById( "c"+ (i+1) ).innerHTML = cn[i];
				document.getElementById("cp"+ (i+1) ).innerHTML = "$"+c[i].toFixed(0);
				}

		//veggie
		var vp = [15, 13]
		const v = [ "Sauted Vegetables and Mixed KimChi","Sauted Vegetables"];
		const vd = ["Mushrooms, squash, peppers, onoins, artichokes; Spinach, cucumber, sprouts, garlic with light Spicy korean sauce",
		"Mushrooms, squash, peppers, onoins, artichokes "]
		for (let i = 0; i < sn.length; i++) {
				document.getElementById( "v" + (i+1) ).innerHTML = v[i];
				document.getElementById("vp"+ (i+1) ).innerHTML = "$"+vp[i].toFixed(0);
				document.getElementById("vd"+ (i+1) ).innerHTML = vd[i];
				}


}

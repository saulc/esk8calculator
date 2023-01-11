
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
		var p = [21, 18, 16, 17, 15, 19, 20 ];
		document.getElementById("item1").innerHTML = "Seared Ahi Tuna with Rice";
		document.getElementById("item1price").innerHTML = "$"+p[0].toFixed(0);
		document.getElementById("item1des").innerHTML
		= "Fresh Ahi seared and sliced served over rice. ";

		document.getElementById("item2").innerHTML = "Seared Salmon with Rice";
		document.getElementById("item2price").innerHTML = "$"+p[1].toFixed(0);
		document.getElementById("item2des").innerHTML
		= "Crispy pan seared filet with white or brown rice.";

		document.getElementById("item3").innerHTML = "Grilled Chicken with Rice";
		document.getElementById("item3price").innerHTML = "$"+p[2].toFixed(0);
		document.getElementById("item3des").innerHTML
		= "Marinated chicken breast with White or Brown Rice";

		document.getElementById("item4").innerHTML = "bbq Chicken drumsticks with Fries";
		document.getElementById("item4price").innerHTML = "$"+p[3].toFixed(0);
		document.getElementById("item4des").innerHTML
		= "Two grilled legs finished in spicy bbq sauce with Regular, SweetPotato or Carrot Fries";

		document.getElementById("item5").innerHTML = "Roasted Pork with Rice";
		document.getElementById("item5price").innerHTML = "$"+p[4].toFixed(0);
		document.getElementById("item5des").innerHTML
		= "Slow roasted shredded pork shoulder with white or brown rice.";

		document.getElementById("item6").innerHTML = "FOOD";
		document.getElementById("item6price").innerHTML = "$"+p[5].toFixed(0);
		document.getElementById("item6des").innerHTML
		= "Bread, That and Bread. ";

		document.getElementById("item7").innerHTML = "Swordfish Filet with SweetPotato Fries";
		document.getElementById("item7price").innerHTML = "$"+p[6].toFixed(0);
		document.getElementById("item7des").innerHTML
		= "SweetPotato Fries ";

		//Sandwiches
				var sn = [17, 12, 12, 14, 15, 11, 15 ];
		document.getElementById("s1").innerHTML = "LemonPepper Tuna";
		document.getElementById("sp1").innerHTML = "$"+sn[0].toFixed(0);
		document.getElementById("sd1").innerHTML
		= "Bread, That and Bread. ";

		document.getElementById("s2").innerHTML = "Spicy Pork";
		document.getElementById("sp2").innerHTML = "$"+sn[1].toFixed(0);
		document.getElementById("sd2").innerHTML
		= "Bread, That and Bread. ";

		document.getElementById("s3").innerHTML = "Spicy Chicken";
		document.getElementById("sp3").innerHTML = "$"+sn[2].toFixed(0);
		document.getElementById("sd3").innerHTML
		= "Bread, That and Bread. ";

		document.getElementById("s4").innerHTML = "Classic Chicken";
		document.getElementById("sp4").innerHTML = "$"+sn[3].toFixed(0);
		document.getElementById("sd4").innerHTML
		= "Bread, That and Bread. ";

		document.getElementById("s5").innerHTML = "Classic Chicken";
		document.getElementById("sp5").innerHTML = "$"+sn[4].toFixed(0);
		document.getElementById("sd5").innerHTML
		= "Bread, That and Bread. ";

		document.getElementById("s6").innerHTML = "Classic Chicken";
		document.getElementById("sp6").innerHTML = "$"+sn[5].toFixed(0);
		document.getElementById("sd6").innerHTML
		= "Bread, That and Bread. ";

		document.getElementById("s7").innerHTML = "Salmon";
		document.getElementById("sp7").innerHTML = "$"+sn[6].toFixed(0);
		document.getElementById("sd7").innerHTML
		= "... ";

		//snacks
		var c = [ 7, 7, 7, 5, 5, 6, 5]
		 document.getElementById("c1").innerHTML = "Spicy Fried Chicken Bites";
		 document.getElementById("cp1").innerHTML = "$"+c[0].toFixed(0);

		 document.getElementById("c2").innerHTML = "Spicy Pork Sliders";
		 document.getElementById("cp2").innerHTML = "$"+c[1].toFixed(0);

		 document.getElementById("c3").innerHTML = "Salmon Bites";
		 document.getElementById("cp3").innerHTML = "$"+c[2].toFixed(0);

		 document.getElementById("c4").innerHTML = "Fries";
		 document.getElementById("cp4").innerHTML = "$"+c[3].toFixed(0);

		document.getElementById("c5").innerHTML = "KimBap (Rice Rolls)";
		document.getElementById("cp5").innerHTML = "$"+c[4].toFixed(0);

		document.getElementById("c6").innerHTML = "Spring Roll";
		document.getElementById("cp6").innerHTML = "$"+c[5].toFixed(0);

		document.getElementById("c7").innerHTML = "KimChi Salad";
		document.getElementById("cp7").innerHTML = "$"+c[6].toFixed(0);

		//veggie
			var v = [15, 13]
			document.getElementById("v1").innerHTML = "Sauted Vegetables and Mixed KimChi";
			document.getElementById("vp1").innerHTML = "$"+v[0].toFixed(0);
			document.getElementById("vd1").innerHTML
			= "Mushrooms, squash, peppers, onoins, artichokes; Spinach, cucumber, sprouts, garlic with light Spicy korean sauce";

			document.getElementById("v2").innerHTML = "Sauted Vegetables and Mixed KimChi";
			document.getElementById("vp2").innerHTML = "$"+v[1].toFixed(0);
			document.getElementById("vd2").innerHTML
			= "Mushrooms, squash, peppers, onoins, artichokes ";
}

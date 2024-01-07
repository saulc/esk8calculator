
function contact() {
			var c = ["213 314 1592", "Los Angeles, Ca 90039",
			".com",".com"];

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

		const pl = [ "one", "$toned", "three", "four" , "five", "six", "seven"
						];
			var p = [66, 88, 99, 101, 33, 77, 44 ];
			const pd = [
							'<img src="./res/sk.jpg" alt="SK8" width="88" class="zoom:hover zoom">',
							 '<img src="./res/cl.jpg" alt="SK8" width="88" class="zoom:hover zoom">',
 							 '<img src="./res/sk88.jpg" alt="SK8" width="88" class="zoom:hover zoom">',
 							 '<img src="./res/palms.jpg" alt="SK8" width="88" class="zoom:hover zoom">',
							  "more", "less", "whatever"
						]

		var sn = [23, 33, 26, 31, 31, 24, 25, 26 ];
		var san = ["Regular", "Classic", "Cali","idk", "21", "stuff", "thing", "undefined"];
		var sd = [
					'<img src="./res/t.png" alt="SK8" width="88" class="zoom:hover zoom">',
					'<img src="./res/lado.jpg" alt="SK8" width="88" class="zoom:hover zoom">',
					'<img src="./res/vlm.jpg" alt="SK8" width="88" class="zoom:hover zoom">',
					'<img src="./res/vla.jpg" alt="SK8" width="88" class="zoom:hover zoom">',
				]
					var c = [ 7, 7, 7, 6, 5, 5, 5];
					var cn = [
						 "words", "words", "more words"
					]

									//app
				var ap = [121, 143, 100, 111, 51];
				const a = [ "and a few", "more words", "Go here", "lala"];
				const ad = [
						'<img src="./res/sk.jpg" alt="SK8" width="88" class="zoom:hover zoom"> <img src="./res/sk88.jpg" alt="SK8" width="88" class="zoom:hover zoom"> <img src="./res/webb.jpg" alt="SK8" width="88" class="zoom:hover zoom"> <img src="./res/sw.png" alt="SK8" width="88" class="zoom:hover zoom">',
						'<img src="./res/bg.jpg" alt="SK8" width="88" class="zoom:hover zoom"> <img src="./res/ap.jpg" alt="SK8" width="88" class="zoom:hover zoom">',
						'<img src="./res/mv.jpg" alt="SK8" width="88" class="zoom:hover zoom">',
						'<img src="./res/la.jpg" alt="SK8" width="88" class="zoom:hover zoom">'
									];
					var vp = [55, 88]
						const v = [ "Blue", "Pink", "Green", "Orange"];
						const vd = ["1", "2", "3"]

function calc() {

	//drinks
contact();
	var wtx = document.getElementById("tx").checked;
	var tt = wtx ? "Prices Include 9.5% Sales Tax. " : "+ 9.5% Sales Tax. "
		document.getElementById("tax").innerHTML = tt;
	var d1 = 3;
	var d2 = 5;
	document.getElementById("d1").innerHTML = getPrice(d1, wtx);
	// document.getElementById("d2").innerHTML = getPrice(d2, wtx);
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

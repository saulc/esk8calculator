

function createTable(TestTitle, id,  rows){
	var pre = '<div class="col-md"><table class="table table-hover table-condensed table-borderless"><th class="col hd text-center" colspan="2">'
	var endtitle = '</th><tbody>'
	var endtable = '</tbody></table></div>'
	var pre1 = '<tr ><td class="col-md-7"><p id="'
	var pre2 = '" class="mn"></p></td><td class="col-md-2"><p id="'
	var pre3 = '" class="pr"></p></td>'
	var pre4 = '<td class="col-md-1"><p id="'
	var pre5 = '" class="pr"></p></td></tr>'
			var t = pre + TestTitle + endtitle ;
			for(let i =1; i<=rows; i++){
				t+= pre1 + id + i +pre2;
				t+=  id+id + i + pre3;
				// t+= '</tr>';
				t+=  pre4 + id+id+id + i + pre5;
			}
			t += endtable;
			return t;
}

function calc() {

	document.getElementById("pp").innerHTML = createTable('Speed/Range', 'a', 15);
	document.getElementById("qq").innerHTML = createTable('Battery', 'b', 15);
	// document.getElementById("ww").innerHTML = createTable('Table', 'c', 15);

	var t =  document.getElementById("type").value;
    var s =  document.getElementById("scells").value;
    var p =  document.getElementById("pcells").value;
    var c =  document.getElementById("cc").value;
    var mda =  document.getElementById("mda").value;
    var mdc =  document.getElementById("mdc").value;
    var da =  document.getElementById("da").value;
    var dc =  document.getElementById("dc").value;
    var usec = document.getElementById("usec").checked;
		var cellweight = document.getElementById("cw").value/1000;
		var packweight = (s*p*cellweight);

		var names = ['type', 'series', 'Parallel', 'Capacity',
		'Cont. Discharge', 'Max Discharge', 'cont Amps', 'Max Amps', 'Cell weight']
		var cn = [
			t, s, p, c, mda, mdc, da, dc, cellweight
		]
		var units = [ 'v', '', '', 'w-hr', 'A', 'A', 'A', 'A', 'grams']



        document.getElementById("mdc").disabled = !usec;
        document.getElementById("dc").disabled = !usec;

        document.getElementById("mda").disabled = usec;
        document.getElementById("da").disabled = usec;

    if(!usec){
    document.getElementById("md").innerHTML = (mda * p).toFixed(2);
    document.getElementById("mdc").value = mda/c;

    document.getElementById("cd").innerHTML = (da * p).toFixed(2);
    document.getElementById("dc").value = da/c;

    }
    else{
    // document.getElementById("md").innerHTML = (mdc*c * p).toFixed(2);
    document.getElementById("mda").value = mdc*c;

    // document.getElementById("cd").innerHTML = (dc*c * p).toFixed(2);
    document.getElementById("da").value = dc*c;
    }


    var packinfo = s + "s" + p +"p " + (c*p).toFixed(2) + "Ah";

    // document.getElementById("batteryinfo").innerHTML = text;
    var voltage = t*s;
    // document.getElementById("batteryvol").innerHTML = text.toFixed(2);
     var capacity = p*c;
    // document.getElementById("batterycap").innerHTML = text.toFixed(2);
     var be = t*s*p*c;
    // document.getElementById("batteryenergy").innerHTML = be.toFixed(2);
    var mbattpower = t*s*mda*p;
    // document.getElementById("batterypower").innerHTML = text.toFixed(2);
    var battpower = t*s*da*p;
    // document.getElementById("contbatterypower").innerHTML = battpower.toFixed(2);
		var hp = t*s*mda*p*.0013401;
		// document.getElementById("batterypowerhp").innerHTML = hp.toFixed(2);
		var chp = t*s*da*p*.0013401;
		// document.getElementById("contbatterypowerhp").innerHTML = battpower.toFixed(2);
		//
    var kv =  document.getElementById("kv").value;
    var ef =  document.getElementById("eff").value;
    ef = ef/100;
    var poles =  document.getElementById("poles").value;
    poles = poles/2;
    var wheel =  document.getElementById("wheel").value;
    var mp =  document.getElementById("mp").value;
    var wp =  document.getElementById("wp").value;
    var ratio = wp/mp;
    var motorrpm = s*t*kv;
    // document.getElementById("motorrpm").innerHTML = text.toFixed(0);
    var motorrpmload = s*t*kv*ef;
    // document.getElementById("motorrpmload").innerHTML = text.toFixed(0);
    var wheelrpm = s*t*kv*ef/ratio;
    // document.getElementById("wheelrpm").innerHTML = text.toFixed(2);
     var mwheelrpm = s*t*kv/ratio;
    // document.getElementById("mwheelrpm").innerHTML = text.toFixed(2);
    // document.getElementById("ratio").innerHTML = ratio.toFixed(2);
    var erpm = s*t*kv*poles;
    // document.getElementById("erpm").innerHTML = text.toFixed(0);
    var erpmload = s*t*kv*ef*poles;
    // document.getElementById("erpmload").innerHTML = text.toFixed(0);
    var temp = wheel/1000000 *3.14159 *60
    var vk = temp * s*t*kv*ef/ratio ;
    // document.getElementById("speedk").innerHTML = vk.toFixed(2);
    var v = vk*.6214;
    // document.getElementById("speed").innerHTML = text.toFixed(2);
      var vmk = temp * s*t*kv/ratio ;
    // document.getElementById("mspeedk").innerHTML = vk.toFixed(2);
    var vm = vk*.6214;
    // document.getElementById("mspeed").innerHTML = text.toFixed(2);

    var wpm = document.getElementById("wpm").value;
    var range = be/wpm;
     // document.getElementById("range").innerHTML = range.toFixed(2);
     var rangek = range*1.609344;
      // document.getElementById("rangek").innerHTML = range.toFixed(2);

			 		var n2 = ['Gear Ratio', 'Loaded Speed', 'Loaded Speed',
					'Max Speed', 'Max Speed'
					, 'Estimated Range:', 'Estimated Range:', 'Max Erpm', 'Loaded Erpm'
					, 'Max Motor rpm', '	Loaded Motor rpm', 'Max Wheel rpm', 'Loaded Wheel rpm']
					var v2 = [ratio, vk, v, vmk, vm, range, rangek , erpm, erpmload, motorrpm,
				 motorrpmload, mwheelrpm, wheelrpm ]
					var u2 = ['', 'kph', 'mph', 'kph', 'mph', 'miles', 'km', '','','','','','']

			for (let i = 0; i < n2.length; i++) {
					document.getElementById( "a"+ (i+1) ).innerHTML = n2[i];
					document.getElementById( "aa"+ (i+1) ).innerHTML = v2[i].toFixed(2);//+ " " + u2[i];
					document.getElementById( "aaa"+ (i+1) ).innerHTML = u2[i];
					// document.getElementById("cp"+ (i+1) ).innerHTML = getPrice(c[i], wtx);
					}
//table 2
		var n3 = [ 'Pack Info', 'Pack weight', 'Pack weight', 'Total Battery Voltage:'
		,  'Total Battery Capacity', 'Total Battery Energy:', 'Cont. Battery Power:'
		,'Max Battery Power:', 'Cont. Battery Power:', 'Max Battery Power:',
		'Cont. Discharge', 'Max Discharge']

		var v3 = [packinfo, packweight,packweight*2.2, voltage, capacity, be, battpower, mbattpower,
		chp, hp, (p*mda), (p*mdc)]

	 var u3 = [ s*p+' cells','kg','lbs', 'v', 'amp-hr', 'w-hr', 'w', 'w', 'hp', 'hp'
 		,'amps', 'amps']
			for (let i = 0; i < n3.length; i++) {
					document.getElementById( "b"+ (i+1) ).innerHTML = n3[i];
					if(i==0)	document.getElementById( "bb"+ (i+1) ).innerHTML = v3[i];
					else document.getElementById( "bb"+ (i+1) ).innerHTML = v3[i].toFixed(2);// + " " + u3[i];
					document.getElementById( "bbb"+ (i+1) ).innerHTML = u3[i];
					// document.getElementById("cp"+ (i+1) ).innerHTML = getPrice(c[i], wtx);
					}


}

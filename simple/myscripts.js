
function calc() {
	var t =  document.getElementById("type").value;
    var s =  document.getElementById("scells").value;
    var p =  document.getElementById("pcells").value;
    var c =  document.getElementById("cc").value;
    var mda =  document.getElementById("mda").value;
    var mdc =  document.getElementById("mdc").value;
    var da =  document.getElementById("da").value;
    var dc =  document.getElementById("dc").value;
    var usec = document.getElementById("usec").checked;





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
    document.getElementById("md").innerHTML = (mdc*c * p).toFixed(2);
    document.getElementById("mda").value = mdc*c;

    document.getElementById("cd").innerHTML = (dc*c * p).toFixed(2);
    document.getElementById("da").value = dc*c;
    }



    var text = s + "s" + p +"p " + (c*p).toFixed(2) + "Ah";
    document.getElementById("batteryinfo").innerHTML = text;
    text = t*s;
    document.getElementById("batteryvol").innerHTML = text.toFixed(2);
     text = p*c;
    document.getElementById("batterycap").innerHTML = text.toFixed(2);
     var be = t*s*p*c;
    document.getElementById("batteryenergy").innerHTML = be.toFixed(2);
    text = t*s*mda*p;
    document.getElementById("batterypower").innerHTML = text.toFixed(2);
    var battpower = t*s*da*p;
    document.getElementById("contbatterypower").innerHTML = battpower.toFixed(2);
		var hp = t*s*mda*p*.0013401;
		document.getElementById("batterypowerhp").innerHTML = hp.toFixed(2);
		var battpower = t*s*da*p*.0013401;
		document.getElementById("contbatterypowerhp").innerHTML = battpower.toFixed(2);

    var kv =  document.getElementById("kv").value;
    var ef =  document.getElementById("eff").value;
    ef = ef/100;
    var poles =  document.getElementById("poles").value;
    poles = poles/2;
    var wheel =  document.getElementById("wheel").value;
    var mp =  document.getElementById("mp").value;
    var wp =  document.getElementById("wp").value;
    var ratio = wp/mp;
    text = s*t*kv;
    document.getElementById("motorrpm").innerHTML = text.toFixed(0);
    text = s*t*kv*ef;
    document.getElementById("motorrpmload").innerHTML = text.toFixed(0);
    text = s*t*kv*ef/ratio;
    document.getElementById("wheelrpm").innerHTML = text.toFixed(2);
     text = s*t*kv/ratio;
    document.getElementById("mwheelrpm").innerHTML = text.toFixed(2);
    document.getElementById("ratio").innerHTML = ratio.toFixed(2);
    text = s*t*kv*poles;
    document.getElementById("erpm").innerHTML = text.toFixed(0);
    text = s*t*kv*ef*poles;
    document.getElementById("erpmload").innerHTML = text.toFixed(0);
    var temp = wheel/1000000 *3.14159 *60
    var vk = temp * s*t*kv*ef/ratio ;
    document.getElementById("speedk").innerHTML = vk.toFixed(2);
    text = vk*.6214;
    document.getElementById("speed").innerHTML = text.toFixed(2);
      var vk = temp * s*t*kv/ratio ;
    document.getElementById("mspeedk").innerHTML = vk.toFixed(2);
    text = vk*.6214;
    document.getElementById("mspeed").innerHTML = text.toFixed(2);

    var wpm = document.getElementById("wpm").value;
    var range = be/wpm;
     document.getElementById("range").innerHTML = range.toFixed(2);
     range = range*1.609344;
      document.getElementById("rangek").innerHTML = range.toFixed(2);




}

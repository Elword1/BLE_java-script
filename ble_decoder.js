function decode(bytes) {
    var str = "";
    var i = 0;
    
    // Explicit classic loop to avoid strict engine errors
    for (i = 0; i < bytes.length; i = i + 1) {
        str = str + String.fromCharCode(bytes[i]);
    }
    
    var parts = str.split(",");
    
    // Convert array index explicitly to float numbers
    var t = parseFloat(parts[0]);
    var h = parseFloat(parts[1]);
	var p = parseFloat(parts[2]);
    var b = parseFloat(parts[3]);
    return {
        temperature: t,
        humidity: h,
		pressure: p,
		vlotage: b
		
    };
}
function calc(){
	var a = parseInt(document.querySelector("#a").value);
	var b = parseInt(document.querySelector("#b").value);
	var c = parseInt(document.querySelector("#c").value);
	
    root = Math.sqrt(b*b - (4 * a * c));

     result1 = (-b + root) / (2 * a);
     result2 = (-b - root) / (2 * a);
    if(root * root > 0){
	console.log(result1);
	console.log(result2);
	document.querySelector('#result1').innerHTML = "x = "+result1;
    document.querySelector('#result2').innerHTML = "x = "+result2;
}else{
	result1="No Solution";
    document.querySelector('#result1').innerHTML = result1;
  ;
}

}


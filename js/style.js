function to(x){
	 var txt1="aaaaaaaaaa";
	 var txt2="bbbbbbbbbb";
	 var txt3="cccccccccc";
	 var a1=document.getElementById("a1");
	 var a2=document.getElementById("a2");
	 var a3=document.getElementById("a3");

	 switch(x){
	 	case "a1":
	 	document.getElementById("intro1").innerHTML=txt1;
	 	var content1=txt1;
	 	break;
	 	case "a2":
	 	document.getElementById("intro2").innerHTML=txt2;
	 	break;
	 	case "a3":
	 	document.getElementById("intor3").innerHTML=txt3;
	break;}
}

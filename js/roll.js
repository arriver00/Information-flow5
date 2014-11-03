var id = setInterval(nextPic,5000); ;
function nextPic(){
	var width=parseInt($("#img_content li").css("width")) ;
  if($("#img_content ul").css("left")==-4500+"px") {
      $("#img_content ul").css("left","0px");}
      var left=parseInt($("#img_content ul").css("left")) ;
      $("#img_content ul").animate({"left":left-width},"slow");
  }
  
  function prevPic(){
  
	var width=parseInt($("#img_content li").css("width"));
	if($("#img_content ul").css("left")==0+"px") {
      $("#img_content ul").css("left","-4500px");}
  var left=parseInt($("#img_content ul").css("left")) ;
	$("#img_content ul").animate({"left":left+width},"slow");
	
  }
  	
$(document).ready(function(){
 $("#next").click(nextPic);
 $("#prev").click(prevPic);
 $("#img_content ul").hover(function(){
 	$("#img_content ul").stop(); 
  clearInterval(id);     
 },function(){
 	 id = setInterval(nextPic,5000); 
   	
  });
});


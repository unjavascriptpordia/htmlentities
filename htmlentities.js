var unJsPorDia=(function(window,undefined){
	function htmlentities(string){
  	var i=0;
		var len=string.length;
		var encodedStringToHtmlEntities="";
		while(i<len){
    	if(!(/[\w]/i.test(string[i]))){
    		v10=string[i].charCodeAt().toString();
				encodedStringToHtmlEntities+="&#"+v10+";";
      }else{
      	encodedStringToHtmlEntities+=string[i];
      }
			i++;
    }
		return encodedStringToHtmlEntities;
  }
  return{
  	"htmlentities":htmlentities
  }
})(window);
//window.addEventListener("load",function(){
	var htmlentities=document.getElementById("htmlentities");
	htmlentities.addEventListener("click",function(){
  	var data=document.getElementById("data").value;
    var resultEncode=unJsPorDia.htmlentities(data);
		document.getElementById("resultEncode").value=resultEncode;
  });
//});

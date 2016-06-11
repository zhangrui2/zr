;(function($){
	var cinemaScroll=new IScroll(".city",{
		scrollbars:true,
		fadeScrollbars:"true"
	})

	function init(){
		renderHotCity();
		renderMoreCity();
	}

	function renderHotCity(){
		var str="<p>热门</p>";
		$.each(hotList,function(i,v){
			str+='<ul>'+
					'<li>'+v[0]+'</li>'+
				 '</ul>'; 
		})
		$(str).appendTo(".hot-city");
	}

	function renderMoreCity(){
		var str="";
		var letter=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

		letter.forEach(function(i){
			//console.log(i);
			str+='<div class="item">'+
					'<p>'+i+'</p>'+
					'<ul>';
			$.each(cityList,function(idx,val){
				//console.log(val);
				var firstLetter=val[1].substr(0,1).toUpperCase();
				//console.log(firstLetter);
												
				if(firstLetter==i){
					str+='<li>'+val[0]+'</li>';						 
				}										
			})
			str+='</ul>'+
				 '</div>';
		})
		console.log(str);	
		
		$(str).appendTo(".more-city");
		
	}

	init();
})(Zepto)
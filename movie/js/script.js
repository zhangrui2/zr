define(["jquery"],function($){
		
	var cinemaScroll=new IScroll("#main",{
		scrollbars:true,
		fadeScrollbars:"true"
	})

	function init(){
		bindEvent();
	}
	function bindEvent(){
		$(".screen").on("click",function(){
			$(".mask").show();
			$(".choice").show();
		})
		change();
	}
	function change(){
		$(".title").on("click","li",function(){
			var idx=$(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$(".content").eq(idx).show().siblings(".content").hide();
		})	
	}
	$.ajax({
		url:'data/cinema.json',
		type : "get",
		dateType : "json",
		success : function(data){
			renderCinema(data.cinemaInfo);
		}
	})
	function renderCinema(res){
		var str="";
		$.each(res,function(i,v){
			//console.log(v.cinemaName);
			str+='<div class="item">'+
					'<h3>'+v.cinemaName+'</h3>'+
					'<p class="addr">'+v.cinemaAdd+'<span>5km</span></p>'+
					'<p class="instr"><span>ATMOS</span><em></em></p>'+
				'</div>'
		})
		$(str).appendTo(".scroll");
		cinemaScroll.refresh();
	}

	$.ajax({
		url:'data/region.json',
		type : "get",
		dateType : "json",
		success : function(data){
			//console.log(data.regionInfo);
			renderRegion(data.regionInfo);
			
		}
	})
	function renderRegion(region){
		var str="";
		$.each(region,function(i,v){
			//console.log(v.regionName);
			str+='<li>'+v.regionName+'</li>';
		})
		$(str).appendTo(".region");
	}

	init();	
})


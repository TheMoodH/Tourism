window.onload=function(){
	var oBox=document.getElementById('box');
	var oUl1=document.getElementById('ul1');
	var oLi1=oUl1.getElementsByTagName('li');
	var oUl2=document.getElementById('ul2');
	var oLi2=oUl2.getElementsByTagName('li');
	var oDian = document.getElementById('dian');
	var oLo = oDian.getElementsByTagName('li');
	var Tupfj = document.getElementsByClassName('tup_fj');
	var oDjxl = document.getElementById('djxl');
	var Djxlwd = document.getElementById('djxl_wd');
	var Bannerwd = document.getElementById('bannerwd');
	var oLi1Width=oLi1[0].offsetWidth;
	var timer=null;
	var time=null;
	var y=0;
	//alert(oLi1Width);
	Djxlwd.onclick=function(){
		oDjxl.style.display="none";
		Bannerwd.style.display="block";
	}
	oUl1.style.width=oLi1Width*oLi1.length+'px';    //给ul1一个宽度
	for(j=0;j<oLo.length;j++){
		oLo[j].index=j;
		oLo[j].onclick=function(){
			for(j=0;j<oLo.length;j++){
				oLo[j].className='';
				Tupfj[j].style.display='none';
			}
			Tupfj[this.index].style.display="block";
			this.className='atv'   
		}    
	}
	for(var i=0;i<oLi2.length;i++){
		//alert(i)
		oLi2[i].index=i;   //获取li2的索引
		oLi2[i].onmouseover=function(){
			show(this.index)
			// alert(this.index)
		}
	}

	oBox.onmouseover=function(){      //鼠标放上定时器停止
		clearInterval(time);
	}

	oBox.onmouseout=function(){       //鼠标离开开启定时器
		time=setInterval(function(){
			show(y);
			y++;
			//alert(oLi2.length)
			if(y==oLi2.length){y=0}    
		},1000)
	}

	clearInterval(time);
	time=setInterval(function(){      //自动轮播
		show(y);
		y++;
		//alert(oLi2.length)
		if(y==oLi2.length){y=0}    //图片轮播结束，拽回第一个重新开始；
	},1000)

	function show(j){         //鼠标放上li2对应的li运动并且li2对应的颜色改变
		for(var i=0;i<oLi2.length;i++){
				oLi2[i].className="";
			}
			oLi2[j].className="active";

			clearInterval(timer);
			timer=setInterval(function(){
				var iSpeed=(-oUl1.offsetLeft-oLi1Width*j)/6;     //缓冲运动
				var x=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				oUl1.style.left=x+oUl1.offsetLeft+'px';
			},22)
	}


}
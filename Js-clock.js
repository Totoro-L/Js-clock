function toDouble(n){
	if(n<10)
	{
		return '0'+n;
	}
	else
	{
		return ''+n;
	}
}
window.onload=function(){
     var cNumber=document.getElementsByTagName('input');
	 var timer=null;
	 var timer2=null;
	 for(var i=0;i<6;i++)
	 {
		 cNumber[i].setAttribute('disabled','disabled'); 
	 }
	 function tick1(){
		 var cData=new Date();
		 cNumber[0].value=toDouble(cData.getFullYear());
		 cNumber[1].value=toDouble(cData.getMonth()+1);
		 cNumber[2].value=toDouble(cData.getDate());
		 cNumber[3].value=toDouble(cData.getHours());
		 cNumber[4].value=toDouble(cData.getMinutes());
		 cNumber[5].value=toDouble(cData.getSeconds());
	     }
	function tick2(){
		 cNumber[5].value=toDouble(parseInt(cNumber[5].value)+1);
		 if(parseInt(cNumber[5].value)>=60)
		 {
			 cNumber[5].value=toDouble(0);
			 cNumber[4].value=toDouble(parseInt(cNumber[4].value)+1);
			 if(parseInt(cNumber[4].value)>=60){
				 cNumber[4].value=toDouble(0);
				 cNumber[3].value=toDouble(parseInt(cNumber[3].value)+1);
				  if(parseInt(cNumber[3].value)>=24){
				 cNumber[3].value=toDouble(0);
				 cNumber[2].value=toDouble(parseInt(cNumber[3].value)+1);
			      }
			 }
		 }
	}
	 timer=setInterval(tick1, 1000);
	 tick1();
	 cNumber[6].onclick=function (){   //设置时间
		 clearInterval(timer);
		 clearInterval(timer2);
		 for(var i=0;i<6;i++)
	     {
		     cNumber[i].removeAttribute('disabled');
	     }
		 for(var j=6;j<10;j++)
		 {
			 if(cNumber[j].style.display=='inline-block')
			 {
				 cNumber[j].style.display='none';
			 }
			 else
			 {
				 cNumber[j].style.display='inline-block';
			 }
		 }
	 };
	 cNumber[8].onclick=function (){     //返回
			 for(var i=0;i<6;i++)
	         {
		         cNumber[i].setAttribute('disabled','disabled');
	         }
		     for(var j=6;j<10;j++)
		     {
			     if(cNumber[j].style.display=='inline-block')
			     {
				     cNumber[j].style.display='none';
			     }
			     else
			    {
				 cNumber[j].style.display='inline-block';
			    }
		     }
			 timer=setInterval(tick1, 1000);
	         tick1();
		 }
	 cNumber[9].onclick=function (){     //确定
			 for(var i=3;i<6;i++)
	         {
		         cNumber[i].setAttribute('disabled','disabled');
	         }
	         for(var j=6;j<10;j++)
		     {
			     if(cNumber[j].style.display=='inline-block')
			     {
				     cNumber[j].style.display='none';
			     }
			     else
			    {
				 cNumber[j].style.display='inline-block';
			    }
		     }
			 timer2=setInterval(tick2, 1000);
	         tick2();
	 };
	 cNumber[7].onclick=function (){  //同步更新
		 timer=setInterval(tick1, 1000);
	     tick1();
	 };
};
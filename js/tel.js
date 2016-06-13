if(localStorage.con){
	var con=JSON.parse(localStorage.con)
}else{
var con=[
	{id:1001,name:"asd",tel:"12345673456"},
	{id:1002,name:"sdw",tel:"12345673456"},
	{id:1003,name:"dqw",tel:"12345673456"},
	{id:1004,name:"ssd",tel:"12345673456"},
	{id:1005,name:"dwd",tel:"12345673456"},
	{id:1006,name:"qsd",tel:"12345673456"},
	{id:1007,name:"rsd",tel:"12345673456"},
	{id:1008,name:"tsd",tel:"12345673456"},
	{id:1009,name:"ysd",tel:"12345673456"},
	{id:1010,name:"yjd",tel:"12345673456"},
	{id:1011,name:"jsd",tel:"12345673456"},
	{id:1012,name:"usd",tel:"12345673456"},
	{id:1013,name:"ksd",tel:"12345673456"},
	{id:1014,name:"osd",tel:"12345673456"},
	{id:1015,name:"psd",tel:"12345673456"},
	{id:1016,name:"lsd",tel:"12345673456"},
	{id:1017,name:"xsd",tel:"12345673456"},
	{id:1018,name:"vhd",tel:"12345673456"},
	{id:1019,name:"vsd",tel:"12345673456"}
]
localStorage.setItem("con",JSON.stringify(con))
}
var forEach=con.forEach
var flag=true
var flag1=true
var obj={}
con.forEach(function(v){
	if(v.name[0]){
		var k=v.name[0].toUpperCase()
		if(!obj[k]){
			obj[k]=[]	
		}
		obj[k].push(v)
	}
	
})
var zimuliebiao=Object.keys(obj).sort()
var list=document.querySelector(".list-ul")
var dl=document.querySelector(".contacts")
var tanchu=document.querySelector(".tanchu")
var head=document.querySelector(".head")
var bijiao=function(v){
		var li=document.createElement("li")
		list.appendChild(li)
		li.innerHTML='<a href="#'+v+'">'+v+'</a>'
		var dt=document.createElement("dt")
		dt.id=v
		dt.innerHTML='<span class="fenlei">'+v+'</span>'
		dl.appendChild(dt)
		var obje=obj[v]
		console.log(v)
		forEach.call(obje,function(v){
			var dd=document.createElement("dd")
			var x=v.tel.slice(0,3)+'-'+v.tel.slice(3,7)+'-'+v.tel.slice(7)
			dd.innerHTML='<h5 class="name">'+v.name+'</h5><h6 class="phone">'+x+'</h6><div class="fg"data="'+v.id+'"></div>'
			dl.appendChild(dd)
		})
	}
zimuliebiao.forEach(function(v){
	bijiao(v)	
})
list.parentNode.style.height=list.firstChild.offsetHeight*zimuliebiao.length+"px"
dl.addEventListener("touchstart",function(e){
	var el=e.target
	if(el.classList.contains("fg")){
		tanchu.style.display="block"
		var ull=tanchu.querySelector("ul")
		con.forEach(function(v){
			var eld=Number(el.getAttribute("data"))
			if(eld===v.id){
				ull.innerHTML='<li class="toux"><img src="" alt=""></li><li class="names">'+v.name+'</li><li class="number">'+v.tel+'</li><li class="beizhu">备注</li><li class="button esc">取消</li><li class="button enter"datan="'+v.id+'">完成</li>'
			}
		})
		localStorage.setItem("con",JSON.stringify(con))	
	}
})
tanchu.addEventListener("touchstart",function(e){
	var el=e.target
	if(el.classList.contains("esc")){
		tanchu.style.display="none"
	}else if(el.classList.contains("tanchu")){
		tanchu.style.display="none"
	}else if(el.classList.contains("xinxi")){
		e.stopProgapation()
	}else if(el.classList.contains("names")){
		var tmp=el.innerHTML
		if(flag){
			el.innerHTML='<input type="text"value="'+tmp+'" />'
			flag=false
		}
	}else if(el.classList.contains("number")){
		var tmp=el.innerHTML
		if(flag1){
			el.innerHTML='<input type="text"value="'+tmp+'" />'
			flag1=false
		}	
	}else if(el.classList.contains("enter")){
		flag1=true
		flag=true
		var ell=Number(el.getAttribute("datan"))
		con.forEach(function(v){
			if(ell===v.id){
				if(el.parentNode.querySelector(".names").querySelector("input")){
					v.name=el.parentNode.querySelector(".names").querySelector("input").value
					el.parentNode.querySelector(".names").innerHTML=v.name
					var vaa=v.name
					wancheng(ell,"h5",vaa)
				}
				if(el.parentNode.querySelector(".number").querySelector("input")){
					v.tel=el.parentNode.querySelector(".number").querySelector("input").value
					el.parentNode.querySelector(".number").innerHTML=v.tel
					var vaa=v.tel
					wancheng(ell,"h6",vaa)
				}
				tanchu.style.display="none"
			}
		})
		localStorage.setItem("con",JSON.stringify(con))
		dl.innerHTML="";
		list.innerHTML=""
		obj={}
		con.forEach(function(v){
			if(v.name[0]){
				var k=v.name[0].toUpperCase();
				if(!obj[k]){
					obj[k]=[]	
				}
				obj[k].push(v)
			}
			
		})
		zimuliebiao=[]
		zimuliebiao=Object.keys(obj).sort();
		zimuliebiao.forEach(function(v){
			bijiao(v);	
		})
       	
	}
})
var wancheng=function(ll,k,va){
	var ddd=document.querySelectorAll("dd")
	forEach.call(ddd,function(v){
		var dddd=Number(v.querySelector("div").getAttribute("data"))
		if(ll===dddd){
			v.querySelector(k).innerHTML=va
		}
	})
}
head.addEventListener("touchstart",function(e){
	var el=e.target
	if(el.classList.contains("add")){
		tanchu.style.display="block"
		var ulll=tanchu.querySelector("ul")
		var objj={id:con[con.length-1].id+1,name:"",tel:""}
		ulll.innerHTML='<li class="toux"><img src="" alt=""></li><li class="names"></li><li class="number"></li><li class="beizhu">备注</li><li class="button esc">取消</li><li class="button enter"datan="'+objj.id+'">完成</li>'
		con.push(objj)
		localStorage.setItem("con",JSON.stringify(con))
	}else if(el.classList.contains("fanhui")){
		tanchu.style.display="none"
	}else if(el.classList.contains("sx")){
		dl.innerHTML=""
		list.innerHTML=""
		obj={}
		con.forEach(function(v){
			if(v.name[0]){
				var k=v.name[0].toUpperCase();
				if(!obj[k]){
					obj[k]=[]	
				}
				obj[k].push(v)
			}
			
		})
		var t=setTimeout(function(){
			zimuliebiao=[]
			zimuliebiao=Object.keys(obj).sort();
			zimuliebiao.forEach(function(v){
				bijiao(v);	
			})
		},1000)
	}
	
})
//   touchstart
// //////////////////////////////////////////
// var obj={}
// con.forEach(function(v){
// 	var k=v.name[0].toUpperCase()
// 	if(!obj[k]){
// 		obj[k]=[]
// 	}
// 	obj[k].push(v)
// })
// var zimu=object.keys(obj).sort()
//  var list=document.querySelector(".list-ul")
//  zimu.forEach(function(v){
//  	var li=document.createElement("li")
//  	list.appendChild(li)
//  	li.innerHTML=v
//  })
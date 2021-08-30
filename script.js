let list=document.getElementById("list");
let menu=document.getElementById("menu");




menu.addEventListener("click",()=>{
	
	if(list.style.display=="none"){
		list.style.display="Block";
	}else{
		list.style.display="none";
	}
})

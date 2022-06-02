
	var arr = ['a','b','c','d','e','f','g','aa','ab','cd','ee','ea','gt','hfg','we']
    var subarr = ['Fruit','cars','city','islands','mountains','animals','comp','bikes','guitars','food','trees','TV','movies','colors','phones']
		createElements();
createMenuElements();
	const searchInpt = document.getElementById('search');
	const box =  document.querySelectorAll("main div");
			
				
	searchInpt.addEventListener("keyup" , function (e){
	const q = event.target.value.toLowerCase();
	console.log(q);
	
	box.forEach((box) => {
		console.log("ron")
	box.querySelector("h4").textContent.toLowerCase().startsWith(q)
	? (box.style.display="")
	:(box.style.display = 'none');
	
	});
	});		


	function createElements(){
	
	for (let i = 0; i < arr.length; i++) {
  var root = document.getElementById('root');
	 const newDiv = document.createElement("div");
     
     newDiv.classList.add("projectBox"+i ,"projectBox");
    
	  root.appendChild(newDiv);
	   const title = document.createElement("h4");
	   newDiv.appendChild(title);

	   title.innerHTML = arr[i];
       title.className="title";
       title. addEventListener("click" , function (e){
	
	console.log(e.target)})
       const subtitle = document.createElement("h5");
       subtitle.className="subTitle";
	   newDiv.appendChild(subtitle);
	   subtitle.innerHTML = subarr[i];
     
}
	
	  
	}

	function createMenuElements(){
	
	for (let i = 0; i < arr.length; i++) {
  var root = document.getElementById('right-div-grid');
	 const newDiv = document.createElement("div");
     
     newDiv.classList.add("projectBox");
    
	  root.appendChild(newDiv);
	   const title = document.createElement("h4");
	   newDiv.appendChild(title);

	   title.innerHTML = arr[i];
       title.className="title";
       title. addEventListener("click" , function (e){
	
	console.log(e.target)})
       const subtitle = document.createElement("h5");
       subtitle.className="subTitle";
	   newDiv.appendChild(subtitle);
	   subtitle.innerHTML = subarr[i];
     
}
	
	  
	}
	

   

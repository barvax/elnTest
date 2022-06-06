
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
     document.getElementById('innerBox').style.display="none";
     document.getElementById('expBox').style.display="block";
     var x = document.getElementById('mid1');
     var z = document.createElement("div");
     x.append(z);
     z.className = "top-menu";
   

    for (let i = 0; i < 20; i++) {
        
       var b =   document.createElement("div");
       b.className = "testBox";
       z.append(b);
        var y = document.createElement('h6');
        y.innerHTML = "sub project  "+ i ;
        y.className="sub-project-topBar-title"
        b.append(y)
          
    }

   

    
    // var root = document.getElementById('mid1');
    // // root.className="top-menu"
    //     for (let i = 0; i < projectsArr.length; i++) {
           
    //         const newDiv = document.createElement("div");
    
    //         newDiv.classList.add("projectBox" + i, "projectBox", "testBox");
    
    //         root.appendChild(newDiv);
    //         const title = document.createElement("h4");
    //         newDiv.appendChild(title);
    
    //         title.innerHTML = projectsArr[i].short;
    //         title.className = "title";
    //         title.projectIndex = i;
    //         title.addEventListener("click", function (e) {
    
    //             console.log(e.target.innerHTML)
    //             ShowRightSide(e.target.projectIndex);
    
    
    //         })
    //         const subtitle = document.createElement("h5");
    //         subtitle.className = "subTitle";
    //         newDiv.appendChild(subtitle);
    //         subtitle.innerHTML = projectsArr[i].projectName
    
    //     }
    
    
    // }
    
}});

function BackFromHome(){
    document.getElementById('pop-up-page').style.display="none";
    document.getElementById('innerBox').style.display="grid";

}
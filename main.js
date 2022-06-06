

const projectsArr = [
    {
        index: 0,
        short: "Fr",
        projectName: "Fruit",
        manager: "mickey mouse",
        image: "data:image/jpeg;base64,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",
        id: 354
    },
    {
        index: 1,
        short: "Ca",
        projectName: "Cars",
        manager: "rocky balboa",
        image: "https://upload.wikimedia.org/wikipedia/en/5/53/Rocky_balboa.jpeg",
        id: 263

    },
    {
        index: 2,
        short: "Cy",
        projectName: "Citys",
        manager: "Tom Hanks",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwIccc2mb4V1ISQUTZiEgD0-1pWG7mAFAiiTV8SpLuQ&s",
        id: 765
    }, {
        index: 3,
        short: "Ma",
        projectName: "Mauntains",
        manager: "rambo",
        image: "https://c8.alamy.com/comp/EFACN6/sylvester-stallone-rambo-first-blood-part-ii-1985-EFACN6.jpg",
        id: 988
    }, {
        index: 4,
        short: "Isl",
        projectName: "Islands",
        manager: "julius caesar",
        image: "data:image/jpeg;base64,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",
        id: 666
    },
    {
        index: 5,
        short: "An",
        projectName: "Animals",
        manager: "louis armstrong",
        image: "data:image/jpeg;base64,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",
        id: 111
    },
    {
        index: 6,
        short: "Co",
        projectName: "Computers",
        manager: "Marilyn Monroe",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoBdQImCar0DTvALtKIkwMJVoCPGrdFuIXDRe-BY-tA&s",
        id: 321
    },
    {
        index: 7,
        short: "BK",
        projectName: "Bikes",
        manager: "Oprah Winfrey",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkRL1BuykY3EW2d5KschtIOYTo5UXLKtc-d3ZRmz_Vg&s",
        id: 399
    },
    {
        index: 8,
        short: "Gur",
        projectName: "Guitars",
        manager: "Johnny Depp",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxezfwJKSsyB-4qYdofuhTzTUPjd8WLuppYFG7WDR4A&s",
        id: 112

    },
    {
        index: 9,
        short: "Fd",
        projectName: "Food",
        manager: "Will Smith",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROlxtkljRuqZsm_ypy5pqcaHYJzthn3VL5ww5VRWU5UA&s",
        id: 076
    },
    {
        index: 10,
        short: "Tr",
        projectName: "Trees",
        manager: "Julia Roberts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTM3La8WmUEypAKvihCqFc_6qVJ-gYBBYW38x8qtAQFw&s",
        id: 956
    },
    {
        index: 11,
        short: "Tv",
        projectName: "Tv",
        manager: "Robert De Niro",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIuc5kKKiJPIYodMxu5yGmG5Qqiyub5yI7V3szEQpKQ&s",
        id: 344
    },
    {
        index: 12,
        short: "Mov",
        projectName: "Movies",
        manager: "Nicole Kidman",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYWJxXHMiJ-NBLZnvdscUokQf4-vSM7bkEbMwghfPGA&s",
        id: 922
    },
    {
        index: 13,
        short: "Cor",
        projectName: "Colors",
        manager: "Tom Cruise",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthqEmvvCKPC3tjTec2y-YKzgK_apR8TRyhYNqhtY86Q&s",
        id: 444
    },
    {
        index: 14,
        short: "Phn",
        projectName: "Phones",
        manager: "Janet Jackson",
        image: "data:image/jpeg;base64,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",
        id: 733
    },

]

const subProjectsArr = [
    {
        index: 0,
        subProjectName: "Sub Project ",
        id: 2331
    },
    {
        index: 1,
        subProjectName: "Sub Project ",
        id: 4231
    },
    {
        index: 2,
        subProjectName: "Sub Project ",
        id: 9834
    },
    {
        index: 3,
        subProjectName: "Sub Project ",
        id: 5571
    },
    {
        index: 4,
        subProjectName: "Sub Project ",
        id: 0945
    },
    {
        index: 5,
        subProjectName: "Sub Project ",
        id: 1288
    },
    {
        index: 6,
        subProjectName: "Sub Project ",
        id: 5667
    },
    {
        index: 7,
        subProjectName: "Sub Project ",
        id: 1220
    },
    {
        index: 8,
        subProjectName: "Sub Project ",
        id: 4231
    },
    {
        index: 9,
        subProjectName: "Sub Project ",
        id: 9200
    },
    
]
const projectSelectionArr = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9']
var tempMainProjectIndex = 0;
var tempSubProjectIndex = 0;
createElements('root', projectsArr.length);

createRightSideElements(projectSelectionArr.length, 'right-div-grid')
const searchInpt = document.getElementById('search');
const box = document.querySelectorAll("main div");


searchInpt.addEventListener("keyup", function (e) {
    const q = event.target.value.toLowerCase();
    console.log(q);

    box.forEach((box) => {
        console.log(box. querySelector("h5").textContent)
        box.querySelector("h5").textContent.toLowerCase().startsWith(q)
            ? (box.style.display = "") && console.log("good")
            : (box.style.display = 'none')&& console.log("bad");

    });

});

function ShowRightSide(index) {
    tempMainProjectIndex = index;
    var target = document.getElementById('right-div');
    target.style.display = "block";
    var projectTile = document.getElementById('projecTitle');
    projectTile.innerHTML = projectsArr[index].projectName;
    var manager = document.getElementById('right-sub-title');
    manager.innerHTML = "Project Manager:   " + " " + projectsArr[index].manager;
    var img = document.getElementById("managerImg");
    img.src = projectsArr[index].image;
    projectTitle = document.getElementById('project-sub-toggle');
    projectTitle.innerText = "Sub Projects";
    var projectsubtoggleimg = document.getElementById('project-sub-toggle-img');
    projectsubtoggleimg.style.display = "block";
    var input = document.getElementById('search');
    input.value = "";
    subProjecttitletoggle("none");
    var x = document.querySelectorAll(".mainProject");
    console.log(x[0])

    for (let i = 0; i < x.length; i++) {
        x[i].classList.add("fadeOut")

    }
    var qq = setInterval(function () {
        for (let i = 0; i < x.length; i++) {
            x[i].remove();

        }

    }, 1500);
    setTimeout(wow, 1000);

}

function ShowRightSideSubPriject(index){
    var target = document.getElementById('right-div');
    target.style.display = "block";
    var projectTile = document.getElementById('projecTitle');
subProjecttitletoggle("block");
   
   
    projectTile.innerHTML = projectsArr[tempMainProjectIndex].projectName;
    var manager = document.getElementById('right-sub-title');
    manager.innerHTML = "Go To Experiments" ;
    var icon = document.createElement("span");
    manager.append(icon);
    var img = document.createElement("img");
    icon.append(img);
    img.src = "./images/play-solid.svg";
    img.className="play-img";

    
  
  
    projectTitle = document.getElementById('project-sub-toggle');
    projectTitle.innerText = "Sub Projects";
    var projectsubtoggleimg = document.getElementById('project-sub-toggle-img');
    projectsubtoggleimg.style.display = "block";
    var input = document.getElementById('search');
    input.value = "";
}

function wow() {
    createSubMenuElements(9, 'root')
}

function subProjecttitletoggle(disply){
    var sub= document.getElementById('sub-Project-Name');
    sub.innerHTML= subProjectsArr[tempSubProjectIndex].subProjectName+tempSubProjectIndex;
    sub.style.display=disply;
}

function BackToProject() {
    projectTitle = document.getElementById('project-sub-toggle');
    projectTitle.innerText = "Projects";
    var projectsubtoggleimg = document.getElementById('project-sub-toggle-img');
    projectsubtoggleimg.style.display = "none";
    
    var x = document.querySelectorAll(".sub-projec-box");
    for (let i = 0; i < x.length; i++) {
        x[i].classList.add("fadeOut")

    }
    var qq = setInterval(function () {
        for (let i = 0; i < x.length; i++) {
            x[i].remove();

        }

    }, 1500);
    createElements('root', projectsArr.length);

}

function fadeOutSubProject(){
    var x = document.querySelectorAll(".sub-projec-box");
    console.log(x[0])

    for (let i = 0; i < x.length; i++) {
        x[i].classList.add("fadeOut")

    }
    var qq = setInterval(function () {
        for (let i = 0; i < x.length; i++) {
            x[i].remove();

        }

    }, 1500);
    // setTimeout(wow, 1000);
}

function createElements(id, index) {

    for (let i = 0; i < index; i++) {
        var root = document.getElementById(id);
        const newDiv = document.createElement("div");

        newDiv.classList.add("projectBox" + i, "projectBox","mainProject");

        root.appendChild(newDiv);
        const title = document.createElement("h4");
        newDiv.appendChild(title);

        title.innerHTML = projectsArr[i].short;
        title.className = "title";
        title.projectIndex = i;
        title.addEventListener("click", function (e) {

            console.log(e.target.innerHTML)
            ShowRightSide(e.target.projectIndex);


        })
        const subtitle = document.createElement("h5");
        subtitle.className = "subTitle";
        newDiv.appendChild(subtitle);
        subtitle.innerHTML = projectsArr[i].projectName

    }


}

function createSubMenuElements(index , id){
alert("createSubMenuElements(index , id)")
    for (let i = 0; i < index; i++) {
        var root = document.getElementById(id);
        const newDiv = document.createElement("div");

        newDiv.classList.add( "projectBox","sub-projec-box");

        root.appendChild(newDiv);
        const title = document.createElement("h5");
        newDiv.appendChild(title);

        title.innerHTML = subProjectsArr[i].subProjectName+" "+i;
        title.className = "sub-title";
        title.projectIndex = i;
        title.addEventListener("click", function (e) {
  tempSubProjectIndex=i;
            console.log(e.target.innerHTML)
          
            ShowRightSideSubPriject(e.target.projectIndex)
    


        })
 

    }
}


function createRightSideElements(index, id) {
  alert("createRightSideElements(index, id)")
    const myImg = ["./images/calculator-solid.svg", "./images/file-regular.svg", "./images/vial-solid.svg", "./images/chart-gantt-solid.svg", "./images/registered-solid.svg", "./images/biohazard-solid.svg", "./images/clipboard-solid.svg", "./images/route-solid.svg", "./images/campground-solid.svg"]
    for (let i = 0; i < index; i++) {
        var root = document.getElementById(id);
        const newDiv = document.createElement("div");

        newDiv.classList.add("projectBoxRight");

        root.appendChild(newDiv);


        const image = document.createElement("img");
        image.classList.add("image");

        newDiv.appendChild(image);

        image.innerHTML = projectSelectionArr[i];

        image.src = myImg[i];
        image.projectIndex = i;
        image.addEventListener("click", function (e) {

            EnterSubMenuElements();


        })

        const subtitle = document.createElement("h5");
        subtitle.className = "subTitle";
        newDiv.appendChild(subtitle);
        subtitle.innerHTML = "box title.."
    }
}

function EnterSubMenuElements(){
    DestroySubElements();
    addNewSubProjectElements(2, 'right-div-grid')
}
//destroy the right side elements grid
function DestroySubElements(){
var x  = document.querySelectorAll(".projectBoxRight");
for (let i = 0; i < x.length; i++) {
   x[i].remove();
    
}
}

///now let build the sub menu bottons
function addNewSubProjectElements(index , id){

    const myImg = ["./images/calculator-solid.svg", "./images/file-regular.svg", "./images/vial-solid.svg", "./images/chart-gantt-solid.svg", "./images/registered-solid.svg", "./images/biohazard-solid.svg", "./images/clipboard-solid.svg", "./images/route-solid.svg", "./images/campground-solid.svg"]
    for (let i = 0; i < index; i++) {
        var root = document.getElementById(id);
        const newDiv = document.createElement("div");

        newDiv.classList.add("projectBoxRight");

        root.appendChild(newDiv);


        const image = document.createElement("img");
        image.classList.add("image");

        newDiv.appendChild(image);

        image.innerHTML = projectSelectionArr[i];

        image.src = myImg[i];
        image.projectIndex = i;
        image.addEventListener("click", function (e) {




        })

        const subtitle = document.createElement("h5");
        subtitle.className = "subTitle";
        newDiv.appendChild(subtitle);
        subtitle.innerHTML = "box title.."
    }

}

document.addEventListener('keypress', function (e) {
if(e.key === 'a'){
    DestroySubElements();
   
}
});






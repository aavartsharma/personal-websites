let projectDict = {
  "Cubethon": {"link": "https://aavart-sharma.itch.io/cubethon",
  "image" : "./logo/cube.jpg", 
  "color" : "#5a8f00",
  "image-class" : "image"
  },
  "Monster Chase": {"link" : "https://aavart-sharma.itch.io/moster-chase", 
  "image" : "./logo/ms.png", 
  "color" : "#240461b3",
  "image-class" : "image"},

  "Demolished by forest of brainwashers": {"link": "https://aavart-sharma.itch.io/d-f-b",
  "image": "./logo/dfb.png", 
  "color" : "#ff000099",
  "image-class" : "image"},

  "Cubethon 2": {"link": "https://aavart-sharma.itch.io/cubethon-2",
  "image": "./logo/cube2.jpg",
  "color" : "#ff009bad",
  "image-class" : "image"},

  "Skyward Assault": {"link": "https://play.google.com/store/apps/details?id=com.aavartsharma.skywardassault&pcampaignid=web_share",
  "image":"./logo/SA.png",
  "color":"#00a9e2",
  "image-class" : "image-Sk"}
};



// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();

// smooth animation for the nav bar buttons
function scrollToSection(sectionId) 
{
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// my code

function codesection() 
{
  let passcode = prompt("what the passcode?");
  if(passcode == "class")
  {
    window.location.href = 'code.html';
  }
  else
  {
    let wrongcomfirm = comfirm("passcode is wrong. please try again");
    if(wrongcomfirm)
    {
      codesection();
    }
  }
}


/*<a href="https://aavart-sharma.itch.io/cubethon" target="_blank" class = "box-a"><div id = "projects-1" class="projests">
<img class = "image" src = "./logo/cube.jpg" alt = "p"><p>Cubethon</p>
</div>
</a>*/
let number = 1;
for(let projectName in projectDict)
{
  let achor = document.createElement("a");
  achor.classList.add("box-a");
  achor.target = "_blank";
  achor.href = projectDict[projectName]["link"];


  let div = document.createElement("div");
  div.id = "projects-"+ number;
  div.classList.add("projects");
  achor.appendChild(div);


  let image = document.createElement("img");
  image.classList.add(projectDict[projectName]["image-class"]);
  image.src = projectDict[projectName]["image"];
  image.alt = projectName;
  div.appendChild(image);


  let para = document.createElement("p");
  para.textContent = projectName;
  div.appendChild(para);
  console.log(achor);

  let mainDiv = document.getElementById("projectsdiv");
  mainDiv.appendChild(achor);
  let line = document.createElement("hr");
  line.classList.add("lines");
  mainDiv.appendChild(line);
  number++;
}


//alert(`this website is an uncomplete project. if you have any good suggestions related to this website pls content me`);
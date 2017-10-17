// NAVIGATION
var links = document.getElementsByClassName("-js-goto-innerpage");
var i;
for (i = 0; i < links.length; i++) {  
  links[i].addEventListener("click", function() {    
    document.location.href = "https://mitrofan4ik.github.io/github-page/";
  });
}

// NAVIGATION
var linksBack = document.getElementsByClassName("-js-goto-startpage");

for (var i = 0; i < linksBack.length; i++) {  
  linksBack[i].addEventListener("click", function() {    
    document.location.href = "https://mitrofan4ik.github.io/github-page2/";
  });
}

// SORT LIST
var dropDown = document.getElementsByClassName("sort-card__title")[0];
var dropDownType = dropDown.getElementsByTagName("em")[0];
var dropDownList =document.getElementsByClassName("sort-card-list")[0];
var dropDownListItems =document.getElementsByClassName("sort-card-list__item");
var li=0;
for (li = 0; li < dropDownListItems.length; li++) {  
  dropDownListItems[li].addEventListener("click", function() {       
    dropDownType.innerHTML=this.getAttribute('data-sort');
     dropDownList.classList.toggle('active');
  });
}

dropDown.addEventListener("click", function() {    
  dropDownList.classList.toggle('active');
});
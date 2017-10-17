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
var myElem = document.getElementById('sortDropdown');
if (myElem !== null) {

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
}
// DATE TIME
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var monthName=monthNames[today.getMonth()]
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m;
document.getElementById('date').innerHTML =
  today.getDate() + " " + monthName;
  var t = setTimeout(startTime, 20000);  
}
startTime()

// NAV LIST 
var navListItem = document.getElementsByClassName("nav-hidden-list__item");
navListItem.addEventListener("click", function() {
  navListItem.classList.remove('active');
  navListItem.classList.add('active');
});
// function setFocusToTextBox(){
//   var textbox = document.getElementById("jsFeatured").focus();
//   textbox.focus();
//   textbox.scrollIntoView();
// }
// // function setFocusToTextBox(){
// //   document.getElementById("jsFeatured").focus();
// // }
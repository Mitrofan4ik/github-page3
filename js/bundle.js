const KEY_ENTER = 13;
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const ITEMS_IN_ROW = 5;
const URL_PAGE = "https://mitrofan4ik.github.io/github-page/"
const URL_PAGE_2 = "https://mitrofan4ik.github.io/github-page2/"

const keyMap ={
  enter: 13,
  escape: 27,
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

const navMap = {
  card: {
    left: {
      back: { col: 1 },
      '*': 'card' // default value
    },
    up: {
      buy: { row: 1, col: [1, 2, 3] },
      "sort-card__title": { row: 1, col: [4, 5] },
      '*': 'card' // default value
    },
    right: 'card',
    down: 'card'
  },
  buy: {
    left: "back",
    right: "sort-card__title",
    down: "card"
  },
  "sort-card__title": {
    left: "buy",
    down: "card"
  },
  back: {
    right: "buy"
  }
}

// NAVIGATION
var links = document.getElementsByClassName("-js-goto-innerpage");
var i;
for (i = 0; i < links.length; i++) {  
  links[i].addEventListener("click", function() {    
    document.location.href = URL_PAGE;
  });
}

var linksBack = document.getElementsByClassName("-js-goto-startpage");

for (var i = 0; i < linksBack.length; i++) {  
  linksBack[i].addEventListener("click", function() {    
    document.location.href = URL_PAGE_2;
  });
}


// KEY NAVIGATION
function makeDefaultFocus() {
  document.getElementsByName("buy")[0].focus();
}

function getNextNodeIndex(arrow, currentNodeIndex, itemsInRow, itemsLength) {
  switch (arrow) {
    case 'left':
      return currentNodeIndex === 0 ? currentNodeIndex : currentNodeIndex - 1;
    case 'up':
      return currentNodeIndex < itemsInRow ? currentNodeIndex : currentNodeIndex - itemsInRow;
    case 'right':
      return currentNodeIndex === (itemsLength - 1) ? currentNodeIndex : currentNodeIndex + 1;
    case 'down':
      return currentNodeIndex >= (itemsLength - itemsInRow) ? currentNodeIndex : currentNodeIndex + itemsInRow;
    default:
      return currentNodeIndex;
  }
}

function comparePosition(next, current) {
  return typeof next !== 'undefined'
  ? next instanceof Array
    ? next.find(row => row === current)
    : next === current
  : true
}

const allCards = document.getElementsByName('card');
document.addEventListener("keydown", e => {
  const itemInFocus = document.querySelector(":focus");

  if(itemInFocus) {
    const arrow = Object.keys(keyMap).find(arrow => keyMap[arrow] === e.keyCode);
    const currentNodeIndex = Array.prototype.indexOf.call(itemInFocus.parentNode.children, itemInFocus);
    const nextNodeName = (navMap[itemInFocus.getAttribute("name")] || {})[arrow];
    let nextNodeIndex = 0;

    if (nextNodeName) {
     if (typeof nextNodeName === 'object') {
        const currentNodeRow = Math.floor((currentNodeIndex) / ITEMS_IN_ROW) + 1;
        const currentNodeCol = (currentNodeIndex + 1) === ITEMS_IN_ROW ? currentNodeIndex + 1 : (currentNodeIndex + 1) % ITEMS_IN_ROW;
        let nodeName;
        Object.keys(nextNodeName).some(name => {
          if (typeof nextNodeName[name] === 'object') {
            const rowCheck = comparePosition(nextNodeName[name].row, currentNodeRow)
            const colCheck = comparePosition(nextNodeName[name].col, currentNodeCol)
            if (rowCheck && colCheck) {
              nodeName = name;
              return true
            }
          }
        });
        nodeName = nodeName || nextNodeName['*']; // if no match - take default value

        if (itemInFocus.getAttribute("name") === 'card' && nodeName === 'card') {
          nextNodeIndex = getNextNodeIndex(arrow, currentNodeIndex, ITEMS_IN_ROW, allCards.length);
        }
        document.getElementsByName(nodeName)[nextNodeIndex].focus();
      } else if (itemInFocus.getAttribute("name") === 'sort-card__title' && nextNodeName === 'card') {
        document.getElementsByName(nextNodeName)[ITEMS_IN_ROW-1].focus();
      } else if (itemInFocus.getAttribute("name") === 'card' && nextNodeName === 'card') {
        nextNodeIndex = getNextNodeIndex(arrow, currentNodeIndex, ITEMS_IN_ROW, allCards.length);
        document.getElementsByName(nextNodeName)[nextNodeIndex].focus();
      } else {
        document.getElementsByName(nextNodeName)[0].focus();
      }
    }
  } else {
    makeDefaultFocus();
  }
});

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
  };
  dropDown.addEventListener("click", function() {  
    dropDownList.classList.toggle('active');
  });
} else {
  var collectionsMenuItem = document.getElementById('jsCollections');
  collectionsMenuItem.addEventListener('click', function(){
    collectionsMenuItem.classList.add('active');
  })
}
// DATE TIME
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function startTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var monthName=monthNames[currentDate.getMonth()]
  document.getElementById('time').innerHTML = hours + ":" + minutes;
  document.getElementById('date').innerHTML = currentDate.getDate() + " " + monthName;
}

setTimeout(startTime, 20000);
makeDefaultFocus();
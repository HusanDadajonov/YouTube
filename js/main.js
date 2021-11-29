let elInp = document.getElementById("search");
let elSearchHistory = document.querySelector(".search-history");
let elForm = document.querySelector(".header__form");
let elBurgerBtn = document.querySelector(".header__burger--btn");
let elSmallMenu = document.querySelector(".menu__small-menu");
let elBigMenu = document.querySelector(".big-menu");
let elContents = document.querySelector(".contents");
let elVidios = document.querySelector(".videos");
let elPersonName = document.querySelectorAll(".person__name");
let sum = 1;

//events

elInp.addEventListener("keyup", showSearchHistory);
elInp.addEventListener("keyup", filterFunc);
elForm.addEventListener("submit", formFunc);
elBurgerBtn.addEventListener("click", showBigMenu)

//functions
function showSearchHistory(e) {
    elSearchHistory.style.display = "flex";

    if(elInp.value == ""){
        elSearchHistory.style.display = "none";
    }
}

function formFunc(e){
    e.preventDefault();

    let elItem = document.createElement("li");
    elItem.className = "search-history__item";
    elItem.innerHTML = elInp.value;
    elSearchHistory.append(elItem);
    elInp.value = "";
}

function showBigMenu(e){
    if(sum){
        elSmallMenu.style.display = "none";
        elBigMenu.style.display = "flex";
        elContents.style.paddingLeft = "225px";
        elVidios.style.paddingRight = "40px";
        sum = 0;
    }
    else{
        elSmallMenu.style.display = "flex";
        elBigMenu.style.display = "none";
        elContents.style.paddingLeft = "0";
        elVidios.style.paddingRight = "80px";
        console.log("awd");
        sum = 1;
    }
    console.log(sum);
}

function filterFunc(e){
    let inpText = elInp.value.toLowerCase();
    elPersonName.forEach(function(item) {
        console.log(elPersonName.includes(item));  
    });
    
}

console.log(elPersonName);


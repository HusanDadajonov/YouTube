let elInp = document.getElementById("search");
let elSearchHistory = document.querySelector(".search-history");
let elForm = document.querySelector(".header__form");
let elBurgerBtn = document.querySelector(".header__burger--btn");
let elSmallMenu = document.querySelector(".menu__small-menu");
let elBigMenu = document.querySelector(".big-menu");
let elContents = document.querySelector(".contents");
let elVidios = document.querySelector(".videos");
let elPersonName = document.querySelectorAll(".person__name");
let elHeaderSearchBtn = document.querySelector(".header__search-show--btn");
let elFormClose = document.querySelector(".header__form-close");
let sum = 1;

//events

elInp.addEventListener("keyup", showSearchHistory);
elInp.addEventListener("keyup", filterFunc);
elForm.addEventListener("submit", formFunc);
elBurgerBtn.addEventListener("click", showBigMenu);
elHeaderSearchBtn.addEventListener("click", showInp);
elFormClose.addEventListener("click", hideInp);

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
        elContents.style.paddingLeft = "240px";
        sum = 0;
    }
    else{
        elSmallMenu.style.display = "flex";
        elBigMenu.style.display = "none";
        elContents.style.paddingLeft = "30px";
        console.log("awd");
        sum = 1;
    }
    console.log(sum);
}

function filterFunc(e){
    let inpText = e.target.value.toLowerCase();

    Array.from(elPersonName).forEach(function (item){
        let itemText = item.textContent;
        if(itemText.toLowerCase().includes(inpText) != 1){
            console.log(itemText);
            item.parentElement.parentElement.parentElement.style.display = "none";
        }
        else{
            item.parentElement.parentElement.parentElement.style.display = "block";
        }
    })
}

function showInp(e){
    elForm.style.opacity = "1";
    elForm.style.zIndex = "100";
    elForm.style.visibility = "visible";
}

function hideInp(e){
    elForm.style.opacity = "0";
    elForm.style.zIndex = "-1";
    elForm.style.visibility = "hidden";
}


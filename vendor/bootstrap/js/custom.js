let btnContainer = document.querySelector('.navbar-nav');
let btns = btnContainer.querySelectorAll('.nav-item');
let arrPosX = [0, 0, 0];
let optionBtns = document.querySelectorAll(".option");
let obw = 9;
let inputs = document.querySelectorAll("input");
let answers = document.querySelectorAll(".answer");

inputs.forEach(input => {
    input.onkeypress = (e) => {
        if (e.keyCode == 13) {
            alert("Sending: " + input.value)
        }
    }
})

answers.forEach(answer => {
    answer.onclick = (e) => {
        let text = answer.children[0].children[1].innerHTML + " " + answer.children[0].children[2].innerHTML;
        alert("Sending: " + text);
    }
})

function changeActiveLink() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          let current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
    }
}

let moveBtns = document.querySelectorAll(".move-btn");

moveBtns.forEach((moveBtn, index) => {
    moveBtn.onclick = () => {
        let optionSlider = moveBtn.parentElement.parentElement.children[1];
        let options = optionSlider.children[0];
        let key = options.id - 1;
        let posX = arrPosX[key];
        options.style.transition = "1s transform ease";
        if(moveBtn.classList.contains("btn-front")) {
            if(!moveBtn.disabled){
                posX -= obw;
                options.style.transform = `translateX(${posX}vw)`;
                arrPosX[key] = posX;
            }
            if (posX < 0) {
                moveBtns[index - 1].style.opacity = 1;
                moveBtns[index - 1].disabled = false;
            } 
            if ((options.children.length * (-6)) == posX) {
                moveBtn.style.opacity = 0.2;
                moveBtn.disabled = true;
            }
        } else {
            if(!moveBtn.disabled){
                posX += obw;
                options.style.transform = `translateX(${posX}vw)`;
                arrPosX[key] = posX;
            }
            if(posX == 0) {
                moveBtn.style.opacity = 0.2;
                moveBtn.disabled = true;
            } 
            if ((options.children.length * (-6)) < posX) {
                moveBtns[index + 1].style.opacity = 1;
                moveBtns[index + 1].disabled = false;
            }
        }
    }
})

optionBtns.forEach(optionBtn => {
    optionBtn.onclick = (e) => {
        let input = optionBtn.parentElement.parentElement.parentElement.parentElement.children[2].children[0].children[0];
        let text = optionBtn.children[0].children[1].innerHTML;
        input.value = text;
    }
})
let home = document.querySelector("#home");
let menuPolygons = home.querySelectorAll(".polygon");

menuPolygons.forEach(menuPolygon => {
    menuPolygon.onclick = () => {
        let currentLink = menuPolygon.children[0].getAttribute("href");
        let current = document.querySelector(`${currentLink}`).id;
        let newCurrentLink = document.querySelector(`.${current}`);
        let currentActive = document.querySelector(".active");
        currentActive.className = currentActive.className.replace(" active", "");
        newCurrentLink.className += " active";     
    }
})

changeActiveLink();
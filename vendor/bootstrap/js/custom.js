let btnContainer = document.querySelector('.navbar-nav');
let btns = btnContainer.querySelectorAll('.nav-item');
let arrPosX = [0, 0, 0];

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let moveBtns = document.querySelectorAll(".move-btn");

moveBtns.forEach(moveBtn => {
    moveBtn.onclick = () => {
        let optionSlider = moveBtn.parentElement.parentElement.children[1];
        let options = optionSlider.children[0];
        let key = options.id - 1;
        let posX = arrPosX[key];
        console.log(key);
        options.style.transition = "1s transform ease";
        if(moveBtn.classList.contains("btn-front")) {
            posX -= 9
            options.style.transform = `translateX(${posX}vw)`;
            arrPosX[key] = posX;
        } else {
            posX += 9
            options.style.transform = `translateX(${posX}vw)`;
            arrPosX[key] = posX;
        }
    }
})

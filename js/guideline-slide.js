let displayedImg = document.querySelectorAll(".displayed-img");
let deviceSlide = document.querySelector(".device-slide");
let opacityImg = document.querySelectorAll(".opacity-img");
let step = document.querySelectorAll(".step");
let prevSelectedStep = document.querySelector(".selected-step");
let prevOndevice = document.querySelector(".ondevice");

step.forEach(item => {
  item.addEventListener("click",() => {
    let num = Number(item.childNodes[1].innerText) - 1;
    console.log(num);
    prevSelectedStep.classList.remove('selected-step');
    item.className += " selected-step";
    prevSelectedStep = item;
    
    //change image on iphone
    prevOndevice.classList.remove('ondevice');
    displayedImg[num].className += " ondevice";
    prevOndevice = displayedImg[num];

    //change opacity slide list
    for(let i = 0; i < 4; i++) {
      deviceSlide.appendChild(opacityImg[num]);
      num++;
      if(num > 3) num = 0;
    }
  });
});


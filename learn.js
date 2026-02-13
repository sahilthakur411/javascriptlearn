
 let x = document.querySelector("#show");
  let yellowbtn = document.querySelector("#buttonyellow");
  let pinkbtn = document.querySelector("#buttonpink");

  yellowbtn.addEventListener("click" , () => {
     document.querySelector("#show").style.backgroundColor = "Yellow"
     console.log(yellowbtn);
  });
  pinkbtn.addEventListener("click" , () => {
     document.querySelector("#show").style.backgroundColor = "pink"
     console.log(pinkbtn);
  });
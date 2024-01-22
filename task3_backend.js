let rnum = 1 + Math.round(Math.random() * 99);

const btn = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

const body = document.querySelector("body");
const h4 = document.createElement("h4");
body.appendChild(h4);
h4.classList.add("txt");

btn.addEventListener("click", function check(){
    const inp = document.querySelector("input");
    if(rnum == inp.value){
        h4.innerHTML = "You guessed it right!";
        console.log(h4);
    }
    else if (rnum > inp.value){
        h4.innerHTML = "Number guessed is lower than the random number";
        console.log(h4);
    }
    else if (rnum < inp.value){
        h4.innerHTML = "Number guessed is greater than the random number";
        console.log(h4);
    }
    else{
      h4.innerHTML = "Input an appropriate number!";
      console.log(h4);
    }
});

btn2.addEventListener("click", function reset(){
    h4.innerHTML = `Your previous number was: ${rnum}, guess the new number!`;
    console.log(h4);
    rnum = 1 + Math.round(Math.random() * 99);
});


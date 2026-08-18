// const { use } = require("react"); 

let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2");
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }

});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    //random button choose
    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`)
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq)
    btnflash(randbtn);
}

function checkans(idx) {
    // console.log("curr level :", level);
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 500);

        }
    }
    else {
        h2.innerHTML = `Game over! your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();

    }
}


function btnpress() {
    let btn = this;
    btnflash(btn);
    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);

    console.log(userseq)
    checkans(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

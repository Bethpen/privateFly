let counterDisplayElem = document.querySelector(".count");
let counterMinusElem = document.querySelector(".minus");
let counterPlusElem = document.querySelector(".plus");

let count = 1;

counterMinusElem.addEventListener("click", () => {
    (count >= 1 ? count-- : count = 0);
    updateCount();
});

counterPlusElem.addEventListener("click", () => { count++; updateCount(); });

const updateCount = () => {
    counterDisplayElem.innerHTML = count;
};

updateCount();
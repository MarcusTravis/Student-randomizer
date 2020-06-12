const peeps = document.querySelector("#peeps");
const btn1 = document.querySelector("#btn1")

btn1.addEventListener("click", randomize) 
function randomize(){
    const num = Math.floor(Math.random() * (12 - 0) + 0);
    peeps.children[num].setAttribute("class", "col-3 bg-danger text-white text-center border m-2 P-2 h1")
}
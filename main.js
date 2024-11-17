const colors = document.querySelectorAll(".colors input") ;
const gradientbox = document.querySelector(".gradient-box");
const selectbox = document.querySelector(".select-box select");
const textarea = document.querySelector("textarea");
const refresh = document.querySelector(".refresh");
const copybtn = document.querySelector(".copy");

function getrandomcolor(){
    let randomhexa = Math.floor(Math.random() * 0xffffff).toString(16) ;
    return `#${randomhexa}` ;
}

let generategradient = (israndom) =>{
    if(israndom){
        colors[0].value = getrandomcolor() ;
        colors[1].value = getrandomcolor() ;
    }
    let gradient = `linear-gradient( ${selectbox.value} ,${colors[0].value} , ${colors[1].value} )` ;
    gradientbox.style.background = gradient ;
    // console.log(gradient)
    textarea.value = `background ${gradient}`
}

 // loop on the inputs colors
colors.forEach(input => 
    input.addEventListener("input" , () => generategradient(false))
 )

selectbox.addEventListener("change" , () => generategradient(false));

// start copy is code ....
let copycode = () => {
    navigator.clipboard.writeText(textarea.value);
    copybtn.textContent = "code copied" ;
    setTimeout( () => 
        copybtn.textContent = "code copied" , 1000)
}
copybtn.addEventListener("click" , copycode)
// end copy is code .....


refresh.addEventListener("click" , () => generategradient(true) )




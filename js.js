const content = document.querySelector("#container") ;
for (let i = 0 ; i<17 ; i++) {
    const div1 = document.createElement("div") ;
    div1.classList.add('box1') ;

    for (let j =0 ; j<17 ; j++){
        const div2 = document.createElement("div") ;
        div2.classList.add('box')
        div1.append(div2) ;
    }
    content.append(div1) ;
}

function random(number) {
    return Math.floor(Math.random()*number) ;
}

function bgChange() {
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    return randomColor ;
}

const box = document.querySelectorAll('.box') ;
box.forEach(element => {
    element.addEventListener("mouseenter",(event) => {
    event.target.style.backgroundColor = bgChange();
})});
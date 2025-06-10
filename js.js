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
changeBg()

function random(number) {
    return Math.floor(Math.random()*number) ;
}

function bgChange() {
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    return randomColor ;
}

function editGridNumber(gridNumber) {
    removeAllDivs()
    const content1 = document.querySelector("#container") ;
    for (let i = 0 ; i<gridNumber ; i++) {
        const div3 = document.createElement("div") ;
        div3.classList.add('box1') ;
    

        for (let j =0 ; j<gridNumber ; j++){
            const div4 = document.createElement("div") ;
            div4.classList.add('box') ;
            div4.style.height = '(800/gridNumber)px'
            div3.append(div4) ;
        }
    
    content1.append(div3) ;
    }
    changeBg()
}

function changeBg (){
    const box = document.querySelectorAll('.box') ;
    box.forEach(element => {
        element.addEventListener("mouseenter",(event) => {
        event.target.style.backgroundColor = bgChange();
    })});
}

function removeAllDivs() {
    const parentDiv = document.querySelector('#container') ;
    parentDiv.innerHTML ='';
}


const button = document.querySelector('#button')
button.addEventListener("click",() => {
    let gridNumber=parseInt(prompt("Enter number of squares per sides : (less than 100)"))
    if (gridNumber < 100) {
        editGridNumber(gridNumber)
    }
    else {
        console.log("You entered too large a number!!")
    }
}) ;



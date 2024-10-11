let main =document.querySelector(".main")
let mainTwo =document.querySelector(".mainTwo")

let headingOne =document.querySelector(".headingOne")
let inputOne =document.querySelector(".inputOne")
let buttonOne =document.querySelector(".buttonOne")
let headingTwo =document.querySelector(".headingTwo")
let inputTwo =document.querySelector(".inputTwo")
let buttonTwo =document.querySelector(".buttonTwo")
let errorOne =document.querySelector(".errorOne")
let errorTwo =document.querySelector(".errorTwo")
let chance =document.querySelector(".chance")
let count = 5;

buttonOne.addEventListener("click",function(){
    if (!inputOne.value) {
        errorOne.innerHTML="Enter Someting";
        
    }else if (isNaN(inputOne.value)) {
        errorOne.innerHTML="Enter a Number";
        
    }else if (!(inputOne.value<10 && inputOne.value>0)) {
        errorOne.innerHTML="Enter 1 to 10"
    }else{
        headingTwo.style.display="block"
        inputTwo.style.display="block"
        buttonTwo.style.display="block"
        mainTwo.style.display="block"
        errorTwo.style.display="block"
        chance.innerHTML=`Chnace : ${count}`

        headingOne.style.display="none"
        inputOne.style.display="none"
        buttonOne.style.display="none"
        main.style.display="none"

    }
})

buttonTwo.addEventListener("click",function(){
    if (!inputTwo.value){
        errorTwo.innerHTML="Enter Something"
    }else if (isNaN(inputTwo.value)) {
        errorTwo.innerHTML="Enter a Number"
    }else if (!(inputTwo.value<10 && inputTwo.value>0)) {
        errorTwo.innerHTML="Enter 1 to 10"
    }else{
        if (count>0) {
            count--
            chance.innerHTML=`Chnace : ${count}`
            if (inputOne.value==inputTwo.value) {
                errorTwo.innerHTML="You Win"
                buttonTwo.style.display="disable"
            }
            
        }else{
            errorTwo.innerHTML='You Lost'
            buttonTwo.style.display="none"
        }
    }
})
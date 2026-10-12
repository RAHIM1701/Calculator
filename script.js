//a function that do the math
function calculation(num1,num2,opperation){
    let result
    switch (opperation) {
        case '+':result=num1+num2            
        break;
        case '-':result=num1-num2  
        break;
        case '*':result=num1*num2  
        break;
        case '/':result=(num2===0)?'error':num1/num2  
        break;
    }
    return result
}
//the display
let numb=[]
let numberButtons=document.querySelectorAll('.numbKeys')
let display=document.querySelector('.display')
let opButtons=document.querySelectorAll('.opKeys')
numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        numb.push(button.value)
        display.textContent=numb.join("")
    })
});
//sitting the first number
let firstNumb,secondNumb,opperation,wasClicked=false
opButtons.forEach(button => {
    button.addEventListener('click',()=>{
        if(!wasClicked){
            firstNumb=Number(numb.join(""))
        }
        else{
            firstNumb=calculation(firstNumb,Number(numb.join("")),opperation)
            display.textContent=firstNumb
        }
        opperation=button.value;
        numb=[]
        wasClicked=true
    })
});
//sitting the second number
let resultButton=document.querySelector(".result")
resultButton.addEventListener('click',()=>{
    if(!wasClicked){
        secondNumb=Number(numb.join(""))
        numb=[]
        display.textContent=`${firstNumb+opperation+secondNumb}=`+calculation(firstNumb,secondNumb,opperation)
    }
    else{
        secondNumb=Number(numb.join(""))
        numb=[]
        display.textContent=`${firstNumb+opperation+secondNumb}=`+calculation(firstNumb,secondNumb,opperation)
        firstNumb=calculation(firstNumb,secondNumb,opperation)
    }
    
})
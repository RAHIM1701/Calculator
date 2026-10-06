//WHAT DO WE NEED?
//1)a function that do the math
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
numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        numb.push(button.value)
        display.textContent=numb.join("")
        console.log(numb)
    })
});
//sitting the first number
let firstNumb,secondNumb,opperation,wasClicked=false
let opButtons=document.querySelectorAll('.opKeys')
opButtons.forEach(button => {
    button.addEventListener('click',()=>{
        opperation=button.value;
        if(!wasClicked){
            firstNumb=Number(numb.join(""))
           console.log(`firstNumb=${firstNumb}`)
        console.log(`opperation=${opperation}`)
        console.log(`wasClicked=${wasClicked}`)
        }
        else{
            console.log('Number(numb.join("")='+Number(numb.join("")))
            console.log(`firstNumb=${firstNumb}`)
            console.log(`opperation=${opperation}`)
            console.log(`wasClicked=${wasClicked}`)        
            firstNumb=(firstNumb,Number(numb.join("")),opperation)
            console.log(`firstNumb=${firstNumb}`)
        }
        numb=[]
        wasClicked=true
    })
});
//sitting the second number
let resultButton=document.querySelector(".result")
resultButton.addEventListener('click',()=>{
    secondNumb=Number(numb.join(""))
    console.log(`secondNumb=${secondNumb}`)
    
    numb=[]
    console.log(calculation(firstNumb,secondNumb,opperation))
    display.textContent=`${firstNumb+opperation+secondNumb}=`+calculation(firstNumb,secondNumb,opperation)
})
//5)add delete button
//6) find how to save multipule numbers and multipule opperations
// and how to make clicking an opperation for the second time save the prevouse result as a firstNumber.




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
        case '/':result=(num2===0)?'error:reset the page':num1/num2  
        break;
    }
    return result
}
//the display
let numb=[]
let numberButtons=document.querySelectorAll('.numbKeys')
let display=document.querySelector('.display')
let opButtons=document.querySelectorAll('.opKeys')
numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        numb.push(button.value)
        display.textContent=numb.join("")
    })
});
//sitting the first number
let firstNumb,secondNumb,opperation,opperationClicked=false
opButtons.forEach(button => {
    button.addEventListener('click',()=>{
        if(!opperationClicked){
            firstNumb=Number(numb.join(""))
        }
        else{
            firstNumb=calculation(firstNumb,Number(numb.join("")),opperation)
            display.textContent=firstNumb
        }
        opperation=button.value;
        numb=[]
        opperationClicked=true
        dotClicked=false
    })
});
//the dot
let dot=document.querySelector('#dot')
let dotClicked=false
dot.addEventListener('click',()=>{
    if(dotClicked===false){
    numb.push(dot.value)
    display.textContent=numb.join("")
    dotClicked=true
    }
})
//sitting the second number
let resultButton=document.querySelector(".result")
resultButton.addEventListener('click',()=>{
    secondNumb=Number(numb.join(""))
    numb=[]
    display.textContent=`${firstNumb+opperation+secondNumb}=`+calculation(firstNumb,secondNumb,opperation)
    firstNumb=calculation(firstNumb,secondNumb,opperation)
    dotClicked=false
})
//delete button
let deleteButton=document.querySelector("#deleteButton")
deleteButton.addEventListener('click',()=>{
    numb.pop()
    display.textContent=numb.join("")
})
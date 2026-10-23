//a function that do the math
function calculation(num1,num2,operation){
    let result
    switch (operation) {
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
let newOperation=document.querySelector('.newOperation')
let oldOperation=document.querySelector('.oldOperation')
let opButtons=document.querySelectorAll('.opKeys')
numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        numb.push(button.value)
        newOperation.textContent=numb.join("")
    })
});
//sitting the first number
let firstNumb=0,secondNumb=0,operation='+',operationClicked=false
opButtons.forEach(button => {
    button.addEventListener('click',()=>{
        if(!operationClicked){
            firstNumb=Number(numb.join(""))
        }
        else{
            oldOperation.textContent=`${firstNumb}${operation}${Number(numb.join(""))}`
            newOperation.textContent=firstNumb
            firstNumb=calculation(firstNumb,Number(numb.join("")),operation)
        }
        operation=button.value;
        numb=[]
        operationClicked=true
        dotClicked=false
      })
});
//the dot
let dot=document.querySelector('#dot')
let dotClicked=false
dot.addEventListener('click',()=>{
    if(dotClicked===false){
    numb.push(dot.value)
    newOperation.textContent=numb.join("")
    dotClicked=true
    }
})
//sitting the second number
let resultButton=document.querySelector(".result")
resultButton.addEventListener('click',()=>{
    secondNumb=Number(numb.join(""))
    oldOperation.textContent=`${firstNumb+operation+secondNumb}`
    newOperation.textContent=calculation(firstNumb,secondNumb,operation)
    firstNumb=calculation(firstNumb,secondNumb,operation)
    numb=[]
    dotClicked=false
})
//delete button
let deleteButton=document.querySelector("#deleteButton")
deleteButton.addEventListener('click',()=>{
    numb.pop()
    newOperation.textContent=numb.join("")
})
//AC button
let acButton=document.querySelector('#acButton')
acButton.addEventListener('click',()=>{
    firstNumb=0
    secondNumb=0
    operation=NaN
    numb=[]
    oldOperation.textContent=''
    newOperation.textContent=numb.join("")
    operationClicked=false
    dotClicked=false
})
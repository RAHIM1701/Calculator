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
let newOpperation=document.querySelector('.newOpperation')
let oldOpperation=document.querySelector('.oldOpperation')
let opButtons=document.querySelectorAll('.opKeys')
numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        numb.push(button.value)
        newOpperation.textContent=numb.join("")
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
            oldOpperation.textContent=`${firstNumb}${opperation}${Number(numb.join(""))}`
            firstNumb=calculation(firstNumb,Number(numb.join("")),opperation)
            newOpperation.textContent=firstNumb
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
    newOpperation.textContent=numb.join("")
    dotClicked=true
    }
})
//sitting the second number
let resultButton=document.querySelector(".result")
resultButton.addEventListener('click',()=>{
    secondNumb=Number(numb.join(""))
    numb=[]
    oldOpperation.textContent=`${firstNumb+opperation+secondNumb}`
    newOpperation.textContent=calculation(firstNumb,secondNumb,opperation)
    firstNumb=calculation(firstNumb,secondNumb,opperation)
    dotClicked=false
})
//delete button
let deleteButton=document.querySelector("#deleteButton")
deleteButton.addEventListener('click',()=>{
    numb.pop()
    newOpperation.textContent=numb.join("")
})
//AC button
let acButton=document.querySelector('#acButton')
acButton.addEventListener('click',()=>{
    firstNumb=0
    secondNumb=0
    opperation=NaN
    numb=[]
    oldOpperation.textContent=''
    newOpperation.textContent=numb.join("")
    opperationClicked=false
    dotClicked=false
})
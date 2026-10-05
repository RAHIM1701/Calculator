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
/*let numb1=Number(prompt('Numb1'))
let numb2=Number(prompt('Numb2'))
let op=prompt('opperation')
console.log(calculation(numb1,numb2,op))*/
//2)a way to make pressing buttonadd a numbur to a string then make the tp a numbur
//3)make the sring appear as a display
let display=document.querySelector('.display')
let numb=[]
let numberButtons=document.querySelectorAll('.numbKeys')
numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        numb.push(button.value)
        display.textContent=numb.join("")
        console.log(numb)
    })
});
let firstNumb,secondNumb,opperation
let opButtons=document.querySelectorAll('.opKeys')
opButtons.forEach(button => {
    button.addEventListener('click',()=>{
        firstNumb=numb.join("")
        numb=[]
        console.log(firstNumb)
        opperation=button.value
        console.log(opperation)
        display.textContent=""
    })
});
let result=document.querySelector(".result")
result.addEventListener('click',()=>{

})

// let resultBut=document.querySelector('.result')
// resultBut.addEventListener('click',()=>{
//     console.log(numb.join(""))
// })
//4) a way to make the clicking in an opperation button save the number and wait for the next opperation



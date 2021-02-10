// The html elements
const container = document.querySelector("#container");
const btn = document.querySelector('#btn')
// initial grid 
makeGrid(16);
function makeGrid(value){
    container.setAttribute('style',`grid-template:repeat(${value},1fr) / repeat(${value},1fr)`)
    for (let i=0;i<Math.pow(value,2);i++){
    const div =  document.createElement('div');
    container.appendChild(div);
    div.classList.add('div');
   div.addEventListener('mouseover',(e)=>{
   div.classList.add('black')
})
}    
}
function removepixel(){
    const newdiv = document.querySelectorAll('.div')
    for (let i =0;i<newdiv.length;i++){
        newdiv[i].remove()
    }
}
const newdiv = document.querySelectorAll(".div");
btn.addEventListener('click',(e)=>{
    newdiv.forEach(div=>{
    div.classList.remove('black')
    })
    removepixel()
    let question = prompt('choose grid size from 1 to 100')
    let answer=question.toLowerCase()
    makeGrid(answer);
})


function menuPage(){
const mainMenu=document.createElement('main');
let menu=[];
content.appendChild(mainMenu);
mainMenu.setAttribute('id','menu-page-main');
mainMenu.innerHTML='<h1>MENU</h1> <p class="top-paid">TOP Paid sandwiches</p>';
let container=document.createElement('section');
mainMenu.appendChild(container);

for(let i=0;i<9;i++){
    menu[i]=`<img src='./images/${i}.jpg'>`;
    let div=document.createElement('div');
    container.appendChild(div);
    div.classList.add(`item-${i}`);
    div.innerHTML=menu[i];
   if(div.classList.contains("item-0")){
    div.innerHTML+='<p>sandwich 1</p>'
   } 
   else if(div.classList.contains("item-1")){
    div.innerHTML+='<p>sandwich 2</p>'
   } 
   else if(div.classList.contains("item-2")){
    div.innerHTML+='<p>sandwich 3</p>'
   } 
   else if(div.classList.contains("item-3")){
    div.innerHTML+='<p>sandwich 4</p>'
   } 
   else if(div.classList.contains("item-4")){
    div.innerHTML+='<p>sandwich 5</p>'
   } 
   else if(div.classList.contains("item-5")){
    div.innerHTML+='<p>sandwich 6</p>'
   } 
   else if(div.classList.contains("item-6")){
    div.innerHTML+='<p>sandwich 7</p>'
   } 
   else if(div.classList.contains("item-7")){
    div.innerHTML+='<p>sandwich 8</p>'
   } 
   else{
    div.innerHTML+='<p>sandwich 9</p>'
   }
}


}


export default menuPage
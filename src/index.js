import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contact";
const content=document.getElementById('content');
const nav = document.createElement('nav');
const homeButton=document.createElement('button')
const menuButton=document.createElement('button')
const contactButton=document.createElement('button')
content.appendChild(nav);
nav.appendChild(homeButton)
nav.appendChild(menuButton)
nav.appendChild(contactButton)
homeButton.innerText="HOME";
menuButton.innerText="MENU";
contactButton.innerText="CONTACT US";
homePage();
let homeContent=document.getElementById('home-page-main');
let menuContent;
let contactContent;


homeButton.addEventListener('click',()=>{
   if(content.innerHTML==''||menuContent.getAttribute('id')=="menu-page-main"||contactContent.getAttribute('id')=='contact-page-main')
   
   {
    content.innerHTML='';
    content.appendChild(nav);
    homePage();
   }
    
})


menuButton.addEventListener('click',()=>{
    if(homeContent.getAttribute('id')=="home-page-main"||contactContent.getAttribute('id')=='contact-page-main')
    {  content.innerHTML='';
    content.appendChild(nav);
        menuPage();
        menuContent=document.getElementById('menu-page-main');
       }
 
})

contactButton.addEventListener('click',()=>{
    if(homeContent.getAttribute('id')=="home-page-main"||menuContent.getAttribute('id')=="menu-page-main")
    {  content.innerHTML='';
    content.appendChild(nav);
        contactPage();
        contactContent=document.getElementById('contact-page-main');
       }
 
})
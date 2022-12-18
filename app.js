// navbar
const togBtn = document.querySelector('.togBtn');
const links = document.querySelector('.links')
togBtn.addEventListener('click',() =>{
    links.classList.toggle('.show-links')
    if(links.classList.contains("show-links")){
        links.classList.remove('show-links')
    }
})
const crossBtn = document.querySelector('.crossBtn');
crossBtn.addEventListener('click',() =>{
    links.classList.add('show-links')
})
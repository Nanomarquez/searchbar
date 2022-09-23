let search = document.querySelector('.search');
let close = document.querySelector('.close');
let searchBox = document.querySelector('.searchBox');
search.addEventListener('click',()=>{
  searchBox.classList.add('active')
})
close.addEventListener('click',()=>{
  searchBox.classList.remove('active')
})

close.addEventListener('mouseover',()=>{
  close.style.transform = "rotate(180deg)"
})
close.addEventListener('mouseout',()=>{
  close.style.transform = "rotate(-180deg)"
})
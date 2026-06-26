let menubtn = document.getElementById('open');
let menubar = document.getElementById('menubar')
let close = document.getElementById('close')

menubtn.addEventListener('click',()=>{
  menubar.classList.add("active")
});

close.addEventListener('click',()=>{
  menubar.classList.remove("active")
});

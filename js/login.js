$(document).load(()=>{
    alert('load')
})

document.getElementById('buttonRegister')
.addEventListener('click',()=>{
    document.getElementById('buttonRegister').style.visibility = 'collapse'
    
    alert('teste');
    document.location.href="views/register.html";
})
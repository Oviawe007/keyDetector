



const box = document.querySelector('.box');
document.addEventListener("keydown", function(e){
    let space = "space".toUpperCase();

    box.querySelector('.key-code').innerHTML = e.keyCode;
    box.querySelector('.key-name').innerHTML = e.key.toUpperCase();
    box.querySelector('.key span').innerHTML = e.key;
    box.querySelector('.code span').innerHTML = e.keyCode;

    if (e.keyCode === 32){
        box.querySelector('.key span').innerHTML = space;
        box.querySelector('.key-name').innerHTML = space;
    }
    box.classList.add('active');
    console.log(e);

    
    
});
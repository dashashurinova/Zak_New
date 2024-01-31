// pop up window
let editButton = document.querySelector('.body__section1_edit');
let addButton = document.querySelector('.body__section1_add');
let saveButton = document.querySelector('.popUpWindow__container_button');
let closeButton = document.querySelector('.popUpWindow__container_close-button');
let editBlock = document.querySelector('.popUpWindow');

console.log('sdgf')


editButton.addEventListener('click',function(){
    editBlock.classList.toggle('popUpWindow_visibility');
})
closeButton.addEventListener('click',function(){
    editBlock.classList.toggle('popUpWindow_visibility');
})
saveButton.addEventListener('click',function(){
    let inputValueName = document.getElementById("new_name").value
    let inputValueStatus = document.getElementById("new_stat").value
    document.getElementsByClassName('body__section1_textMain')[0].textContent = inputValueName
    document.getElementsByClassName('body__section1_text_smal')[0].textContent = inputValueStatus
    document.getElementsByClassName('avatar')[0].src = './img/newton.jpg'

    editBlock.classList.toggle('popUpWindow_visibility');
})

addButton.addEventListener('click', function(){
    var sign = window.alert("Нажми на сердечки и впиши своё имя")
})



// heart button

let heartButton = document.querySelectorAll('.main__card_heart');
for (let i=0; i<heartButton.length; i++){
    heartButton[i].addEventListener('click',function(){
    heartButton[i].classList.toggle('blackHeart');
})}

console.log(heartButton[0].classList.contains('blackHeart'));
console.log(heartButton[1].classList.contains('main__card_heart'));
console.log(heartButton[2].classList.contains('blackHeart'));
console.log(heartButton[3].classList.contains('blackHeart'));
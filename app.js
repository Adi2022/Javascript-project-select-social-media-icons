const menuEl = document.querySelector('.menu');
const menuText = document.querySelector(".menu p");

const socialListEl = document.querySelector(".social-lists");
const allLists = document.querySelectorAll('.social-lists li');





menuEl.addEventListener('click', () => {
    socialListEl.classList.toggle('hide');
    menuEl.classList.toggle('rotate')
})

allLists.forEach(allList => {

    allList.addEventListener('click', () => {

        menuText.innerHTML = allList.innerHTML;
        socialListEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
})

});
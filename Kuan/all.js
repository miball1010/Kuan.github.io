var isOpen = false;
const menu = document.querySelector('.menu');
const menuCloseBtn = document.querySelector('.menuCloseBtn');
const menuBG = document.querySelector('.menuBG');
const toggleBtn = document.querySelector('.toggleBtn');
const toggleItem = document.querySelectorAll('.toggleItem');
const navBtn = document.querySelector('.navBtn');
const topContainer = document.querySelector('.topContainer');

//打開菜單
navBtn.onclick = function () {
    menu.classList.remove('menuClose');
    menu.classList.add('menuOpen');
    setTimeout(menuBG1, 300);


};
function menuBG1() {
    menuBG.style.display = 'block';
    menuBG.style.opacity = 0.5;
};

//關閉菜單
menuBG.onclick = () => {
    menu.classList.remove('menuOpen');
    menu.classList.add('menuClose');
    menuBG.style.opacity = 0;
    setTimeout(menuBG2, 300);

};

menuCloseBtn.onclick = () => {
    menu.classList.remove('menuOpen');
    menu.classList.add('menuClose');

    menuBG.style.opacity = 0;
    setTimeout(menuBG2, 300);

};

function menuBG2() {
    menuBG.style.display = 'none';
};
//打開作品
toggleBtn.onclick = function () {
    toggleItem.forEach(item => {
        item.classList.toggle('visible');

    });
};

document.addEventListener('click', function (event) {
    // 访问被点击的元素
    var clickedElement = event.target;

    console.log(clickedElement);
});

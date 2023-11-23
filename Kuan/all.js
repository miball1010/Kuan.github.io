const menu = document.querySelector('.menu');
const menuCloseBtn = document.querySelector('.menuCloseBtn');
const menuBG = document.querySelector('.menuBG');
const navBtn = document.querySelector('.navBtn');
const toggleBtn = document.querySelector('.toggleBtn');
const toggleItem = document.querySelectorAll('.toggleItem');
const section = document.querySelectorAll('.section');

//打開菜單
navBtn.onclick = function () {
    menu.classList.remove('menuClose');
    menu.classList.add('menuOpen');
    menuBG.style.display = 'block';
    setTimeout(() => {
        menuBG.style.opacity = 0.5;
    }, 300);
};

//關閉菜單
menuBG.onclick = () => {
    menuBG2();
};

menuCloseBtn.onclick = () => {
    menuBG2();

};

function menuBG2() {
    menu.classList.remove('menuOpen');
    menu.classList.add('menuClose');
    menuBG.style.opacity = 0;
    setTimeout(() => {
        menuBG.style.display = 'none';
    }, 300);
};

//打開作品
toggleBtn.onclick = function () {
    toggleItem.forEach(item => {
        item.classList.toggle('visible');

    });


};
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('showAni');
        }
        else {
            // sec.classList.remove('showAni');
        }
    })

};

document.addEventListener('click', function (event) {
    // 访问被点击的元素
    var clickedElement = event.target;
    console.log(clickedElement);
});

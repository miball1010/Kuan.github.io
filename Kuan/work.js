const container = document.querySelector('.containerBox');
const box = document.querySelectorAll('.box');

const worksA = [[1, 1, "自白-1 2022"], [2, 2, "自白-7 2023"], [3, 3, "自白-8 2023"], [4, 3, "自白-5 2023"], [
    5, 1, "自白-9 2023"], [6, 3, "理性編織-4 2023"],[7, 1, "形如型-辱 2023"],[8, 1, "形如型-夢 2023"],
    [9, 1, "形如型-豬 2023"],[10, 1, "形如型-年 2023"],[11, 1, "形如型-亢 2023"],
    [12, 1, "形如型-九 2023"],[13, 1, "形如型-目 2023"],[14, 1, "形如型-古 2023"]];//第幾個,有幾張
const worksB = [[1, 1, "自白-4 2022"]];//第幾個,有幾張

const showBox = document.querySelector('.showBox');
const showBoxImgSrc = document.querySelector('.showBoxImg img');
const ballBox = document.querySelector('.ballBox');
const text = document.querySelector('.text');
const showBoxImg = document.querySelector('.showBoxImg');

var gap = 2;
var gapY = 10;
var a,all;
var screenWidth,screenHeight;
var prefix,numberPart;
var index = 1;

//關閉
document.addEventListener('click', function (event) {
    console.log(event.target);
    if (showBox === event.target) {
        ballBox.innerHTML = "";
        showBox.style.opacity = '0';
        showBox.style.display = "none";
        a = null;
        prefix = null;
        numberPart = null;
        index = 1;
        all = 0;
    }
});

box.forEach((hi) => {
    hi.onclick = () => {

        a = hi.children[0];
        var srcValue = a.getAttribute('src');
        var matchResult = srcValue.match(/([a-zA-Z]+)(\d+)-(\d+)\.jpg/);// 匹配 "a" 和 "1" 部分

        if (matchResult) {
            prefix = matchResult[1];  // 字母
            numberPart = matchResult[2];  // 數字
        }
        showBoxImgSrc.src = srcValue;
        showBox.style.display = 'block';

        setTimeout(() => {
            showBox.style.opacity = '1';
        }, 300);
        boxChange();
    };
});

function boxChange() {
    ballBox.innerHTML = "";
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    if (prefix == 'a') {
        if (screenWidth > screenHeight) {
            showBoxImg.style.height = '75%';
            showBoxImg.style.width = 'auto';
        }
        else {
            showBoxImg.style.width = '80%';
            showBoxImg.style.height = 'auto';
        }
        processWorks(worksA);

       
    }
    else if (prefix == 'b') {
        if (screenWidth > screenHeight) {
            showBoxImg.style.height = 'auto';
            showBoxImg.style.width = '50%';
        }
        else {
            showBoxImg.style.width = '80%';
            showBoxImg.style.height = 'auto';
        }
        processWorks(worksB);
      
    }
};

function processWorks(worksArray){
    for (var i = 0; i < worksArray.length; i++) {
        if (worksArray[i][0] == numberPart) {
            text.innerHTML = worksArray[i][2];
            all = worksArray[i][1];

            if (worksArray[i][1] != 1)
                for (var j = 0; j < worksArray[i][1]; j++) {

                    var ball = document.createElement('div');
                    ball.className = 'ball';
                    ball.setAttribute('data-index', j + 1);
                    ballBox.appendChild(ball);

                    ball.addEventListener('click', function () {

                        var dataIndex = this.getAttribute('data-index');
                        index = dataIndex;
                        showBoxImgSrc.src = 'img/' + prefix + numberPart + '-' + dataIndex + '.jpg';
                    });
                }
        }
    }
};

let startPosition = 0;

// Touch start event
showBox.addEventListener('touchstart', (e) => {
    startPosition = e.touches[0].clientX;
});

// Touch end event
showBox.addEventListener('touchend', (e) => {
    const endPosition = e.changedTouches[0].clientX;

    // Determine the direction of the swipe
    if (startPosition > endPosition) {
        nextImage();
    } else {
        prevImage();
    }
});

// Next image function
function nextImage() {
    index++;
    console.log(index);
    if (index > all)
        index = 1;
    showBoxImgSrc.src = 'img/' + prefix + numberPart + '-' + index + '.jpg';
}

// Previous image function
function prevImage() {
    index--;
    if (index < 1)
        index = all;
    showBoxImgSrc.src = 'img/' + prefix + numberPart + '-' + index + '.jpg';
}

//瀑布
function display() {
    gap = 2;
    const containerＷidth = container.offsetWidth;
    const boxWidth = box[0].offsetWidth;
    var columsCount = parseInt(containerＷidth / (boxWidth + gap));
    gap = ((containerＷidth - boxWidth * columsCount) / (columsCount + 1));
    const boxHeight = [];

    for (let i = 0; i < box.length; i++) {
        //第一排
        if (i < columsCount) {
            box[i].style.top = 0;
            if (i == 0) {
                box[0].style.left = gap + (boxWidth + gap) * i + 'px';
            }
            else {
                box[i].style.left = gap + (boxWidth + gap) * i + 'px';
            }
            boxHeight.push(box[i].offsetHeight);
        }
        else {
            let miniHeight = Math.min(...boxHeight);
            let index = boxHeight.indexOf(miniHeight);
            box[i].style.top = miniHeight + gapY + 'px';
            box[i].style.left = box[index].offsetLeft + 'px';
            boxHeight[index] = boxHeight[index] + box[i].offsetHeight + gapY;
        }
    }
    let maxHeight = Math.max(...boxHeight);
    container.style.height = maxHeight + 'px';
}

window.onload = () => {
    boxChange();
    display();
}
window.onresize = () => {
    boxChange();
    display();
}
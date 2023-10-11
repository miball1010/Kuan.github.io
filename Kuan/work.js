var gap = 2;
var gapY = 10;

const container = document.querySelector('.containerBox');
const box = document.querySelectorAll('.box');

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
let currentIndex = 0; // 当前显示图片的索引
const carouselItems = document.querySelectorAll('.carousel-item'); // 轮播图片元素
const totalItems = carouselItems.length; // 图片总数

// 手动切换图片函数
function changeImage(direction) {
    carouselItems[currentIndex].classList.remove('active'); // 移除当前图片的 active 类
    currentIndex = (currentIndex + direction + totalItems) % totalItems; // 更新索引
    carouselItems[currentIndex].classList.add('active'); // 添加 active 类到新的图片
}

// 自动切换图片函数
function autoChangeImage() {
    changeImage(1); // 切换到下一张图片
}

// 初始化定时器
let intervalId = setInterval(autoChangeImage, 5000);

// 重置定时器的函数
function resetTimer() {
    clearInterval(intervalId); // 清除当前定时器
    intervalId = setInterval(autoChangeImage, 5000); // 重新设置定时器
}

// 监听左右箭头点击事件
document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', (event) => {
        // 节流处理，防止频繁切换
        if (event.detail > 1) return; // 忽略连续触发的事件
        clearInterval(intervalId); // 清除当前定时器
        changeImage(arrow.classList.contains('prev') ? -1 : 1); // 根据箭头方向切换图片
        resetTimer(); // 重置定时器
    });
});

function showtab2(element) {
    // 当鼠标悬停在菜单项上时，改变图标和文字显示
    var num = element.dataset.id;
    // 通过增加文字来显示具体内容
    var links = element.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].style.textIndent = "2em";  // 显示文字
        links[i].style.lineHeight = "56px";  // 文字垂直居中
    }
}

function resettab(element) {
    // 鼠标离开时，恢复原样
    var links = element.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].style.textIndent = "-9999px"; // 隐藏文字
    }
}

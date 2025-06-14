let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化

const noTexts = [
    "大朋友们🌷",
    "六一儿童快乐",
    "不管几岁❤",
    "好奇万岁",
    "要永远保持新事物的好奇"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "image/rencuo.png"; // 震惊
    if (clickCount === 2) mainImage.src = "image/geiqian.png";   // 思考
    if (clickCount === 3) mainImage.src = "image/duoqilai.png";   // 生气
    if (clickCount === 4) mainImage.src = "image/weiqu.png";  // 哭
    if (clickCount >= 5) mainImage.src = "image/crying.png";  // 之后一直是哭

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">大朋友们六一儿童节快乐！！( >᎑<)♡︎ᐝ</h1>
            <img src="image/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});
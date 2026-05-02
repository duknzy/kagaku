// main.js （またはスクリプト部分）

// 要素の取得
const briefingBtn = document.getElementById('briefing-btn');
const briefingModal = document.getElementById('briefing-modal');
const closeBriefingBtn = document.getElementById('close-briefing');
const briefingTitle = document.getElementById('briefing-title');
const briefingText = document.getElementById('briefing-text');
const categorySelect = document.getElementById('category-select'); // 君のセレクトボックスのID

// 解説ボタンを押したときの処理
briefingBtn.addEventListener('click', () => {
    const selectedCategory = categorySelect.value;
    
    // 解説データが存在するかチェック
    if (explanations[selectedCategory]) {
        briefingTitle.textContent = selectedCategory + " の解説";
        briefingText.innerHTML = explanations[selectedCategory];
        briefingModal.style.display = "block"; // モーダルを表示
    } else {
        alert("このセクターの解説データはまだない。");
    }
});

// 閉じるボタンの処理
closeBriefingBtn.addEventListener('click', () => {
    briefingModal.style.display = "none";
});
const addBtn = document.getElementById('btn');
const existText = document.getElementById('text');

addBtn.addEventListener('click', () => {
    setTimeout(() => {existText.textContent = 'ボタンをクリックしました';
}, 2000);
})

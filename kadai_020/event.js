const addBtn = document.getElementById('btn')
const existText = document.getElementById('text')

addBtn.addEventListener('click', () => {
    existText.textContent = 'ボタンをクリックしました';
})
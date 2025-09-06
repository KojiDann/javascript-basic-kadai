const btn = document.getElementById('btn');
const afterClick = document.getElementById('after-click')

btn.addEventListener('click', ()=>{
    const afterClickMessage = document.createElement('after-click');
    afterClickMessage.textContent = 'ボタンをクリックしました';
    afterClick.appendChild(afterClickMessage);

    text.style.display = 'none';
});


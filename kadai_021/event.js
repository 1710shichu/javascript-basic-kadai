const changeBtn = document.getElementById('btn');
const Text = document.getElementById('text');

changeBtn.addEventListener('click',() =>{
  setTimeout(() => {
    Text.textContent = 'ボタンをクリックしました';
  },2000);
})
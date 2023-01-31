const dropDownButton = document.getElementById('drop-down-button');
const dropDownItems = document.querySelector('.hidden')
dropDownButton.addEventListener('pointerdown', () =>{
    if (dropDownItems.classList[1] === 'hidden') {
        dropDownItems.className = 'notHidden';
    }
    else{
        dropDownItems.className = 'drop-down-items-container hidden'
    }
})
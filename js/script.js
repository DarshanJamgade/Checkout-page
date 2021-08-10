const input = document.querySelectorAll('input');


const inputList = [...input];

inputList.forEach(item => {
    item.addEventListener('focus', e => {
        // console.log(e.target.parentElement);
        e.target.parentElement.classList.add('focus');
    })
    item.addEventListener('focusout', e => {
        e.target.parentElement.classList.remove('focus');
    })
})

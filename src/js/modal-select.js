    
let select = function () {
    let selectHeader = document.querySelectorAll('.select-header');
    let selectItem = document.querySelectorAll('.select-item');
    
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });         
       
    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
        select = this.closest('.select'),
        currentText = this.closest('.select').querySelector('.select-current');    
        currentText.innerText = text;
        select.classList.remove('is-active');
        console.log(text);
     }
};
select();
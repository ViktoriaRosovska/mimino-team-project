let select = function () {
    let selectHeader = document.querySelectorAll
        ('.select-header');
    
    selectHeader.forEach(item => {
        item.addEventListener('click', function () {
            this.parentElement.classList.toggle('is-active')
        });
    });
};
select();
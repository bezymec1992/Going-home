function validateTextarea () {
    const textarea = document.querySelector('.textarea');
    const result = document.querySelector('.result');
    const limit = 500;
    result.textContent = limit;

    textarea.addEventListener('input', () => {
        const textLength = textarea.value.length;
        result.textContent = limit - textLength;
    })
}

validateTextarea()

const openFormBtn = document.querySelector('.footer__get');
const form = document.querySelector('.form-wrapper');
const closeForm = document.querySelector('.cross-form');
const body = document.querySelector('body');
const forma = document.querySelector('.form');


openFormBtn.addEventListener('click', () => {
    form.classList.add('open-form')
    body.style = "overflow-y:hidden";
})
closeForm.addEventListener('click', () => {
    form.classList.remove('open-form')
    body.style = "overflow-y:visible";
})

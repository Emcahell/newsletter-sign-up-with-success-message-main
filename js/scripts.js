document.addEventListener("DOMContentLoaded", () =>{

    const form = document.getElementById('form');

    form.addEventListener("submit", (e) =>{
        const inputEmail = document.getElementById('input-email');
        const SpanError = document.getElementById('error-message');

        const cardMain = document.querySelector('.card-main');
        const modal = document.querySelector('.modal');
        const modalCorreo = document.getElementById('modal-correo');
        
        const pattern = /^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
        
        if (inputEmail.value.trim() === ''){
            inputEmail.classList.add('input-error');
            SpanError.textContent = 'Valid email required';
            e.preventDefault();
        } else {
            inputEmail.classList.remove('input-error');
            cardMain.classList.add('none');
            modal.classList.remove('none');
            modalCorreo.textContent = `${inputEmail.value}`;
        }

        if (!pattern.test(inputEmail.value.trim())){
            inputEmail.classList.add('input-error');
            SpanError.textContent = 'Valid email required';
            e.preventDefault();
        } else {
            inputEmail.classList.remove('input-error');
            cardMain.classList.add('none');
            modal.classList.remove('none');
            modalCorreo.textContent = `${inputEmail.value.trim()}`;
        }    
    })
})

const btnModal = document.getElementById('btn-modal');
const modal = document.querySelector('.modal');

btnModal.addEventListener('click', () =>{
    modal.classList.add('none');
})
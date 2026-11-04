function validateField(field) {
    const isValid = field.value.trim() !== '' && field.checkValidity();

    field.classList.toggle('is-valid', isValid);
    field.classList.toggle('is-invalid', !isValid);

    return isValid;
}

export function initializeForm() {
    const form = document.querySelector('#contactForm');

    if (!form) return;

    const fields = form.querySelectorAll('input, textarea');
    
    fields.forEach(field => {
        
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.classList.contains('is-invalid')) validateField(field);
        });

    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        if ([...fields].every(validateField)) form.submit();
    });
}










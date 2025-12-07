document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('[data-validate]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = form.querySelectorAll('[required]');
            
            inputs.forEach(input => {
                const errorEl = input.nextElementSibling;
                
                // Reset error state
                input.style.borderColor = '';
                if (errorEl && errorEl.classList.contains('form-error')) {
                    errorEl.style.display = 'none';
                    errorEl.textContent = '';
                }
                
                // Check if empty
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                    if (errorEl && errorEl.classList.contains('form-error')) {
                        errorEl.style.display = 'block';
                        errorEl.textContent = 'This field is required';
                    }
                    return;
                }
                
                // Email validation
                if (input.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        isValid = false;
                        input.style.borderColor = '#ef4444';
                        if (errorEl && errorEl.classList.contains('form-error')) {
                            errorEl.style.display = 'block';
                            errorEl.textContent = 'Please enter a valid email address';
                        }
                    }
                }
            });
            
            if (isValid) {
                // Show success message or submit form
                const submitBtn = form.querySelector('[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Submitted!';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }
        });
    });
});
document.getElementById('help-form').addEventListener('button-2', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('contact_climapp', this)
        .then(function() {
            const email_error = document.getElementById('email-error');
            email_error.style.display = "none";
        }, function (error) {
            const email_error = document.getElementById('email-error');
            email_error.style.display = "block";
        });
});

function emailVal() {

    const email_error = document.getElementById('email-error');
    email_error.style.display = "none";
    
    const email = document.getElementById('form-input-2');

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email.value) == false) 
    {
        const email_error = document.getElementById('email-error');
            email_error.style.display = "block";
    }

    return 0;
 }
const contactForm = document.forms[0];
const formValues = {};

function collectFormData() {
    formValues.name = contactForm.name.value;
    formValues.email = contactForm.email.value;
    formValues.message = contactForm.message.value;
    window.localStorage.setItem('show data', JSON.stringify(formValues));
  }
  
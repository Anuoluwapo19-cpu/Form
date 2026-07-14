function confirmSubmit() {
    var form = document.querySelector('form');// DOM Manipulation (Document Object Model)
    //Concantenation
    name = form.elements.name2.value;
    phone = form.elements.phone.value;
    address = form.elements.address.value;
    gender = form.elements.gender.value;
    dob = form.elements.dob.value;
    origin = form.elements.origin.value;

    let message = `You have entered the following:\n${name}\n ${phone}\n ${address}\n ${gender}\n ${dob}\n ${origin}`;
    alert(message);
}
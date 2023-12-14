document.getElementById('date').min = new Date().toISOString().split('T')[0];

function validateAndSubmit() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var guestNumber = parseInt(document.getElementById('guestNumber').value) || 0;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    if (!firstName || !lastName || !email || !phoneNumber.match(/^\d{10}$/) || guestNumber <= 0 || !date || !time) {
      alert('Please fill in all the fields accurately.');
      return;
    }

    document.getElementById('confirmationMessage').style.display = 'block';
  }
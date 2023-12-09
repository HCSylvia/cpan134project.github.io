var slideVariable = 0; 

let slide = document.querySelectorAll('.slidesection');

displayImage(slideVariable);

function nextImage() {
    slideVariable++;
    displayImage(slideVariable);
}

function previousImage() {
    slideVariable--;
    displayImage(slideVariable);
}

function displayImage(indexNum) {
    if (indexNum < 0) {
        slideVariable = slide.length - 1;
    } else if (indexNum >= slide.length) {
        slideVariable=0;
    }

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }

    slide[slideVariable].style.display = 'block';
   

}

function submitReservation(){

    // let fName = document.forms["reservationForm"]["fName"].value;
    let fName = document.getElementById("fName").value;
    // let lName = document.forms["reservationForm"]["lName"].value;
    let lName = document.getElementById("lName").value;
    // let email = document.forms["reservationForm"]["email"].value;
    let email = document.getElementById("email").value;
    // let phone = document.forms["reservationForm"]["phone"].value;
    let phone = document.getElementById("phone").value;
    let guestNumber = document.getElementById("guestNumber").value;
    let date = document.getElementById("date").value
    // let date = document.forms["reservationForm"]["date"].value;
    let time = document.getElementById("time").value;

    if (fName && lName && email && phone && guestNumber && date && time){
        document.getElementById("confirmationMessage").innerHTML = fName + " " + lName + "Reservation submitted successfully! We will contact you shortly to confirm your reservation"; 

    }else {
        document.getElementById("confirmationMessage").innerHTML = "Please fill in all the fields"; 
    }


}

    
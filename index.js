let userName = document.getElementById("name");
let pass = document.getElementById("password");
let email = document.getElementById("email");
let checkBox = document.getElementById("box");

let error = document.getElementById("errorId");
let errorPass = document.getElementById("errorPassword");
let errorPass1 = document.getElementById("errorPassword1");
let errorMail = document.getElementById("errorMail");
let errorMail1 = document.getElementById("errorMail1");
let boxError = document.getElementById("boxerror");

//onblur event fonksiyonları, 
//boş gönderilen inputlar doldurulunca 
//dinamik olarak hatayı ortadan kaldırmak için

function idKontrol() {
  if (userName.value == "") {
    error.style.display = "block";
  } else error.style.display = "none";
}

function passKontrol() {
  if (pass.value == "") {
    errorPass.style.display = "block";
  }
  if (pass.value.length < 8 && pass.value.length > 0) {
    errorPass1.style.display = "block";
  } else {
    errorPass.style.display = "none";
    errorPass1.style.display = "none";
  }
}

function emailKontrol() {
  var x = document.form1.email.value;
  var atposition = x.indexOf("@");
  if (email.value == "") {
    errorMail.style.display = "block";
  }
  if (atposition < 1 && email.value != "") {
    errorMail1.style.display = "block";
  } else {
    errorMail.style.display = "none";
    errorMail1.style.display = "none";
  }
}

function boxKontrol() {
    if (checkBox.checked == false) {
        boxError.style.display = "block";
    }
        else
        boxError.style.display = "none";

}

//validation form fonksiyonu

function formValidation() {
  var kontrol = true;
  var x = document.form1.email.value;
  var atposition = x.indexOf("@");
  if (userName.value == "") {
    error.style.display = "block";
    kontrol = false;
  }

  if (pass.value == "") {
    errorPass.style.display = "block";
    kontrol = false;
  }

  if (pass.value.length < 8 && pass.value.length > 0) {
    errorPass1.style.display = "block";
    kontrol = false;
  }

  if (email.value == "") {
    errorMail.style.display = "block";
    kontrol = false;
  }

  if (atposition < 1 && email.value != "") {
    errorMail1.style.display = "block";
    kontrol = false;
  }

  if (checkBox.checked == false) {
    boxError.style.display = "block";
    kontrol = false;
  }

  return kontrol;
}

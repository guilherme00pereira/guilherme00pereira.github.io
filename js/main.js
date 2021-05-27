feather.replace();

function validateForm() {
    const name = document.forms["myForm"]["name"].value;
    const email = document.forms["myForm"]["email"].value;
    const subject = document.forms["myForm"]["subject"].value;
    const comments = document.forms["myForm"]["comments"].value;
    const errormsg = document.getElementById("error-msg");
    const retMsg = document.getElementById("simple-msg");
    errormsg.style.opacity = 0;
    errormsg.innerHTML = "";
    if (name == "" || name == null) {
        errormsg.innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
        fadeIn();
        return false;
    }
    if (email == "" || email == null) {
        errormsg.innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
        fadeIn();
        return false;
    }
    if (subject == "" || subject == null) {
        errormsg.innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";
        fadeIn();
        return false;
    }
    if (comments == "" || comments == null) {
        errormsg.innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Comments*</div>";
        fadeIn();
        return false;
    }

    Email.send({
        SecureToken: "fbf7be94-32a9-4365-9a34-f39b8b8d63f6",
        To: "wp28dev@gmail.com",
        From: email,
        Subject: subject,
        Body: `Mensagem enviada por ${name}: ${comments}`,
    }).then(function(message) {
            retMsg.style.display = 'block';
            if('OK' === message){
                retMsg.classList.add('alert-success');
            } else {
                retMsg.classList.add('alert-danger');
                retMsg.innerHTML = message;
            }
        }
    );
    return false;
}
function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
      if (opacity < 1) {
        opacity = opacity + 0.5
        fade.style.opacity = opacity;
      } else {
        clearInterval(intervalID);
      }
    }, 200);
  }

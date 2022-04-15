

var formOk = 0;

document.getElementById("send_butt").addEventListener(onclick, verifierFormulaire());

function verifierFormulaire() {
console.log("verifierFormulaire")

    if (document.getElementById("email").value == "") {

        document.getElementById("email").style.borderColor = "red";
        formOk = 0;

    } else {

        document.getElementById("email").style.borderColor = "green";
        formOk = formOk + 1;
    }

//MOT DE PASSE
    if (document.getElementById("password").value == "") {

        document.getElementById("password").style.borderColor = "red";
        formOk = 0;

    } else if (document.getElementById("password").value.length < 8) {

        document.getElementById("message_erreur2").innerHTML = "Veuillez entrer un mot de passe de longueur minimum 8 caractères";
        document.getElementById("message_erreur2").style.color = "red";
        document.getElementById("password").style.borderColor = "red";
        formOk = 0;

    } else {

        document.getElementById("password").style.borderColor = "green";
        document.getElementById("message_erreur2").innerHTML = " ";
        formOk = formOk + 1;
    }

//VERIF MOT DE PASSE
    if (document.getElementById("Vpassword").value == "") {

        document.getElementById("Vpassword").style.borderColor = "red";
        formOk = 0;

    } else if (document.getElementById("Vpassword").value != document.getElementById("password").value) {

        document.getElementById("message_erreur3").innerHTML = "Les mots de passe ne correspondent pas.";
        document.getElementById("message_erreur3").style.color = "red";
        document.getElementById("Vpassword").style.borderColor = "red";
        formOk = 0;

    } else {

        document.getElementById("Vpassword").style.borderColor = "green";
        document.getElementById("message_erreur3").innerHTML = " ";
        formOk = formOk + 1;
    }

//VERIFIE LA CHECKBOX
    if (document.getElementById("formCheck-1").checked == false) {

        document.getElementById("i_agree").style.color = "red";
        formOk = 0;

    } else {

        document.getElementById("i_agree").style.color = "green";
        formOk += 1;
    }

    // console.log(formOk);
    // console.log(formOk+1);
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (formOk == 4) {
        console.log("Le formulaire est complet ");
        a = Verif_Email(email, password);
        console.log(a);
        /*document.getElementById("myForm").submit();*/
    } else {
        formOk = 7;

    }
}
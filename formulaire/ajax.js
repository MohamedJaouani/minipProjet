function Verif_Email(mail,password) {
    $.ajax({
                url: "../traitement.php",
                method: "GET",
                data: mail,password,
                dataType: "json",
                success: function(reponse){
                    console.log(reponse);
                    return reponse;
                    
                }
            }
    );
};
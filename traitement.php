<?php
/*
    // phpinfo();
   $mail =  $_GET['mail'];
    $pass = $_GET['password'];

    $mailUtilise = false;
    $i = 0;
    
    $Json = file_get_contents("comptes.json");
    // Converti en un tableau
    $Tab = json_decode($Json, true);

    for ($i=0;$i<sizeof($Tab);$i++){

        foreach($Tab[$i] as $key => $value){

            if($value == $mail){
                $mailUtilise = true;
            }
        }
    }
    if($mailUtilise == true){
        //lorsque le mail est utilisé :
        return 1;
        //si l'ajax reçoit 1 alors le script va afficher "allez vous login"
    } else {
        //MODIFIER LE JSON, AJOUTER LE MAIL ET LE PASSWORD, MSG DE BIENVENUE

        //DIRECTEMENT CONNECTER LUTILISATEUR OU LE REDIRIGER VERS LA PAGE DE CONNEXION (et donc renvoye un msg genre le compte a été créé) ?? 
        //EST CE QUE LE JSON ON LE CHANGE EN AJOUTANT UNE CHAINE DE CARACTERE ?? GENRE echo '{'.$mail. etc etc
            //AAAH MAIS YA LE TRUC DU MAIL AUSSi
        $json = json_encode(array(
            "email" => $mail,
            "password" => $pass

    ));
    }
    
    echo $json;*/
$myObj = new stdClass();
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON;

?>
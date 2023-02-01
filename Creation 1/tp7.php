<html>
    <head>
        <meta charset="utf-8">
        <title>EX8_p2 : Formulaires et controles </title>
</head>
<body>
    <?php
    $a=$_POST['zt_password'];
    $b=$_POST['zt_nom'];
    if ($a=="admin" and $b=="admin")
    {
        echo "Bienvenu M. $a : votre mot de passe est correct".".<br/>";
        echo "Vous etes connecte le" .date("d/m/y"). "<br/>";
        echo "il est ".date("H:i:s")." !";
    }
    else 
    echo "M. $b votre mot de passe est incorrect"."<br/>";
    ?>
    <input type=button value="retour" onclick="self.history.back();">
</body>
</html>

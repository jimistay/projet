<?php
$first_value=$_POST['first_value'];
$second_value=$_POST['second_value'];

$factorial=1;

for($i=1; $i<=$first_value; $i++){
    $factorial=$factorial*$i
}

Echo "voici le résultat:" . $factoriel
for($i=$first_value; $i<=$second_value;$i++){
    if($i%2==0){
        echo $i."";
    }
}
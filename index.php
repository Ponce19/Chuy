<?php
$nombre = _$POST["Nombre"];
$ape = _$POST["apellido"]; 

$dbhost="localhost";
$dbuser="root";
$dbpass="";
$database="tics";

$conn = mysqli_connect ($dbhost,$dbuser,$dbpass,$database);
$EnterDataForm = "INSERT INTO information VALUES ('$nombre','$ape','$ped','$met','$coment')";

mysqli_query($conn, $EnterDataForm);
mysqli_close($conn);
?>
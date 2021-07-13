<?php
if($_POST['btn']=="suma" ){
    echo "<h1>Resultado de la suma</h1>";
    $res=$_POST['n1']+$_POST['n2'];
    echo $res;
}
if($_POST['btn']=="resta" ){
    echo "<h1>Resultado de la resta</h1>";
    $res=$_POST['n1']-$_POST['n2'];
    echo $res;
}
if($_POST['btn']=="multiplica" ){
    echo "<h1>Resultado de la multicaci&oacute;n</h1>";
    $res=$_POST['n1']*$_POST['n2'];
    echo $res;
}
if($_POST['btn']=="divide" ){
    
    if($_POST['n2']==0)
    {
        echo "no se puede dividir entre 0";
    }
    else
    {
    echo "<h1>Resultado de la divisi&oacute;n</h1>";
    $res=$_POST['n1']/$_POST['n2'];
    echo $res;
    }
}
?>
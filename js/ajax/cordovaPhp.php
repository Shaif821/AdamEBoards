<?php

    $pdo= new PDO("mysql:host=localhost;dbname=cordova_php",'root','');
     //$this->pdo= new PDO("mysql:host=localhost;dbname=21866_reachout",'yanick007','yanick007');
     //$pdo= new PDO("mysql:host=mysql.hostinger.fr;dbname=u814102318_reach",'u814102318_yan','yanick007');
     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

     $name = htmlspecialchars($_GET['nameVal']);

     $insert = $pdo->prepare("INSERT INTO cordovaServer(name) VALUES(?)");
     $insert->execute(array($name));
     $display = $insert->fetch();

     ?>

         <h1><?php echo $display['name'];?></h1>

     <?php

 ?>

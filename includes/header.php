<?php
session_start();

// Check if the user is logged into the intranet
if (!isset($_SESSION["uid"]) || !is_numeric($_SESSION["uid"])) {
    //header("Location: https://" . $_SERVER["SERVER_NAME"] . "/sass/index.php?xaction=timeout");
}

header('Content-Type: text/html; charset=utf-8');
// ob_start('ob_gzhandler');

header('Content-Language: en-CA');

?>
<!DOCTYPE html>
<html lang='en-CA'>
    <head>
        <meta charset='utf-8'> 
        <title>Career Fairs - <?= $page_title; ?></title>

        <link rel="stylesheet" media="screen" type="text/css" href="//ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/css/jquery.dataTables.css">
        <link rel="stylesheet" media="screen" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/chosen/0.9.14/chosen.min.css">
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
        <!-- <link rel="stylesheet" media="screen" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/jquery-powertip/1.2.0/css/jquery.powertip-blue.min.css"> --> 
        <!-- <link type="text/css" href="../../cometchat/cometchatcss.php" rel="stylesheet" charset="utf-8"> -->
        <link rel="stylesheet" href="../../css/gumby.css">
        <link rel="stylesheet" href="../../css/global.css">
        <link href="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.4.4/jquery-editable/css/jquery-editable.css" rel="stylesheet">

    </head>
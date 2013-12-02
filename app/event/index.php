<?php

session_start();

error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', '1');

//============================================================================================
// MODEL 
//============================================================================================
require_once '../../includes/Employer.php';
$employer = new Employer();

$actions = array('add');
$page_title = 'Events';
$icon = "icon-user";
$js_path = "event.js";

//============================================================================================
// Header and Nav
//============================================================================================
if(!in_array($_GET['page'], $actions, true)){
	 require_once '../../includes/header.php';
	 require_once '../../includes/nav.php';
}


//============================================================================================
// Load the page requested by the user
//============================================================================================

if (!isset($_GET['page'])) {
    $data = $employer -> getEvent();
    $services = $employer -> getService();
    require_once 'view.php';
} 
else {
    require_once '../../includes/php/error.php';
}

//============================================================================================
// FOOTER
//============================================================================================
if(!in_array($_GET['page'], $actions, true)){
	 require_once '../../includes/footer.php';
}

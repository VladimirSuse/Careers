<?php

session_start();

error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', '1');

//============================================================================================
// MODEL 
//============================================================================================
require_once '../../includes/Employer.php';
$employer = new Employer();
require_once '../../includes/header.php';

//============================================================================================
// Header and Nav
//============================================================================================
if($_GET['page'] != 'add'){
	$page_title = 'Employers';
	$icon = "icon-user";
	$js_path = "employer.js";
	require_once '../../includes/nav.php';
}


//============================================================================================
// Load the page requested by the user
//============================================================================================

if (!isset($_GET['page'])) {
    $data = $employer -> getAllEmployer();
    require_once 'view.php';
} 
else {
    require_once '../../includes/php/error.php';
}

//============================================================================================
// FOOTER
//============================================================================================
if($_GET['page'] != 'add'){
	 require_once '../../includes/footer.php';
}

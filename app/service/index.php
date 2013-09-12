<?php

session_start();

error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', '1');

//============================================================================================
// MODEL 
//============================================================================================
require_once '../../includes/Employer.php';
$employer = new Employer();

$page_title = 'Services';
$icon = "icon-user";
$js_path = "service.js";

//============================================================================================
// Header and Nav
//============================================================================================
if($_GET['page'] != 'view-edit' && $_GET['page'] != 'add-service' && $_GET['page'] != 'edit-service' && $_GET['page'] != 'remove-service'){
	 require_once '../../includes/header.php';
	 require_once '../../includes/nav.php';
}


//============================================================================================
// Load the page requested by the user
//============================================================================================

if (!isset($_GET['page'])) {
    $data = $employer -> getService();
    require_once 'view.php';
}
else if ($_GET['page'] == 'view-edit'){
	echo json_encode($employer -> getService($_POST['id']));
}	
else if ($_GET['page'] == 'add-service'){
	echo $employer -> saveService($_POST);
}
else if ($_GET['page'] == 'edit-service'){
	echo $employer -> updateService($_POST ,$_POST['id']);
}
else if ($_GET['page'] == 'remove-service'){
	echo $employer -> removeService($_POST['id']);
} 
else {
    require_once '../../includes/php/error.php';
}

//============================================================================================
// FOOTER
//============================================================================================
if($_GET['page'] != 'view-edit' && $_GET['page'] != 'add-service' && $_GET['page'] != 'edit-service' && $_GET['page'] != 'remove-service'){
	 require_once '../../includes/footer.php';
}

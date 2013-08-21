<?php

session_start();

error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', '1');

//============================================================================================
// MODEL 
//============================================================================================
require_once '../../includes/Employer.php';
$employer = new Employer();
if($_GET['page'] != 'add' && $_GET['page'] != 'contact-list' && $_GET['page'] != 'view-edit'){
	require_once '../../includes/header.php';
}
//============================================================================================
// Header and Nav
//============================================================================================
if($_GET['page'] != 'add' && $_GET['page'] != 'contact-list' && $_GET['page'] != 'view-edit'){
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
else if($_GET['page'] == 'contact-list'){
	$direct = $employer -> getDirectContact();
	$billing = $employer -> getBillingContact();
	echo json_encode(array('dir_contacts' => $direct, 'bil_contacts' => $billing));
} 
else if($_GET['page'] == 'add'){

} 
else if($_GET['page'] == 'view-edit'){
	echo json_encode( array('emp_info' => $employer -> getAllEmployer($_POST['id']),'dir_contacts' => $employer -> getDirectContact($_POST['id']), 'bil_contacts' => $employer -> getBillingContact($_POST['id'])));
}
else {
    require_once '../../includes/php/error.php';
}

//============================================================================================
// FOOTER
//============================================================================================
if($_GET['page'] != 'add' && $_GET['page'] != 'contact-list' && $_GET['page'] != 'view-edit'){
	 require_once '../../includes/footer.php';
}

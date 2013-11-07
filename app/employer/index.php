<?php

session_start();
error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', '1');

//============================================================================================
// MODEL 
//============================================================================================
require_once '../../includes/Employer.php';
$employer = new Employer();

$actions = array('add-employer', 'contact-list', 'view-edit', 'get-direct-contacts', 'get-billing-contacts', 'remove-contact', 'add-contact-new', 'add-contact-new', 'view-edit-contact', 'edit-contact-details', 'edit-employer-details', 'swap-contact-type');
$page_title = 'Employers';
$icon = 'icon-user';
$js_path = 'employer.js';

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
    $data = $employer -> getAllEmployer();
    $contacts = $employer -> getContactDetail();
    require_once 'view.php';
}
else if($_GET['page'] === 'contact-list'){
	echo json_encode(array('dir_contacts' => $employer -> getDirectContact(), 'bil_contacts' => $employer -> getBillingContact()));
} 
else if($_GET['page'] === 'add-employer'){
	$emp = array();
	$keys = array('org_name_en','org_name_fr','dep_name_en','dep_name_fr','website_en','website_fr','hst_exempt','pst_exempt');
	foreach($keys as $key){
		$emp[$key] = $_POST[$key];
	}
	$id = $employer -> saveEmployer($emp);
	echo json_encode(array('emp_info' => $employer -> getAllEmployer($id), 'dir_contacts'=> array(), 'bil_contacts'=>array()));
} 
else if ($_GET['page'] === 'get-direct-contacts'){
	$data = $employer -> getAllEmployer();
	echo json_encode($data);
}
else if ($_GET['page'] === 'remove-contact'){
	if($_POST['type'] == "billing"){
		echo $employer -> removeBillingContact($_POST['id']);
	}
	else{
		echo $employer -> removeDirectContact($_POST['id']);
	}
}
else if ($_GET['page'] === 'add-contact-new'){
	$empId= $_POST['employer_id'];
	$contactType = $_POST['billing_contact'];
	unset($_POST['id'],$_POST['employer_id'], $_POST['billing_contact']);
	if($contactType == 1){
		$id = $employer -> saveBillingContact($_POST, $empId);
	}
	else{
		$id = $employer -> saveDirectContact($_POST, $empId);
	}
	if(!is_null($id)){
		if($contactType == 1){
			echo json_encode($employer -> getBillingContact($empId));
		}
		else{
			echo json_encode($employer -> getDirectContact($empId));
		}
	}	
}
else if ($_GET['page'] ==='view-edit-contact'){
	echo json_encode($employer -> getContactDetail($_POST['id']));
}
else if ($_GET['page'] === 'edit-contact-details'){
	echo $employer -> updateContactDetail($_POST, $_POST['id']);
}
else if ($_GET['page'] === 'swap-contact-type'){
	if($_POST['billing_contact'] == 1){

	}
	else{

	}
}
else if ($_GET['page'] === 'edit-employer-details'){
	echo $employer -> updateEmployer($_POST, $_POST['id']);
}
else if($_GET['page'] === 'get-billing-contacts'){
	echo json_encode($employer -> getBillingContact());
}
else if($_GET['page'] === 'view-edit'){
	echo json_encode( array('emp_info' => $employer -> getAllEmployer($_POST['id']),
		                    'dir_contacts' => $employer -> getDirectContact($_POST['id']), 
		                    'bil_contacts' => $employer -> getBillingContact($_POST['id']),
							'all_dir_contacts'  => $employer -> getDirectContact(),
							'all_bil_contacts' => $employer -> getBillingContact()
							));
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

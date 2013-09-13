<?php

session_start();

error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', '1');

//============================================================================================
// MODEL 
//============================================================================================
require_once '../../includes/Employer.php';
$employer = new Employer();

$page_title = 'Employers';
$icon = "icon-user";
$js_path = "employer.js";

//============================================================================================
// Header and Nav
//============================================================================================
if($_GET['page'] != 'add-employer' && $_GET['page'] != 'contact-list' && $_GET['page'] != 'view-edit' && $_GET['page'] != 'get-direct-contacts' && $_GET['page'] != 'get-billing-contacts' 
	&& $_GET['page'] != 'remmove-contact' && $_GET['page'] != 'add-contact-new' && $_GET['page'] != 'view-edit-contact' && $_GET['page'] != 'edit-contact-details'
	&& $_GET['page'] != 'edit-employer-details' && $_GET['page'] != 'swap-contact-type'){
	
	require_once '../../includes/header.php';
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
	echo json_encode(array('dir_contacts' => $employer -> getDirectContact(), 'bil_contacts' => $employer -> getBillingContact()));
} 
else if($_GET['page'] == 'add-employer'){
	$contacts = $_POST['contacts'];
	unset($_POST['contacts']);
	$id =  $employer - > saveEmployer($_POST);
	//perform the insertion
	if(!is_null($id){
		if(!is_null($contacts)){
			$contactList = explode(':', $contacts);
			foreach($contactList as $l){
				$contactInfo = explode(',', $l);
				$data = array('first_name' => $contactInfo[1],
							  'last_name' =>$contactInfo[2],
							   'street' =>$contactInfo[3],
							   'street2' =>$contactInfo[4],
							   'postal_code' =>$contactInfo[5],
							   'province' =>$contactInfo[6],
							   'city' =>$contactInfo[7],
							   'country' =>$contactInfo[8],
							   'phone' =>$contactInfo[9],
							   'extension' =>$contactInfo[10],
							   'email' => $contactInfo[11]);
				if($contactInfo[12] == 1){
					$employer -> saveBillingContact($data, $id);
				}
				else{
					$employer -> saveDirectContact($data, $id);
				}	
			}
		}
	}

} 
else if($_GET['page'] == 'get-direct-contacts'){
	$data = $employer -> getAllEmployer();
	echo json_encode($data);
}
else if ($_Get['page'] == 'remove-contact'){
	if($_GET['billing_contact'] == '1'){

	}
	else{

	}
}
else if ($_GET['page'] == 'add-contact-new'){
	
}
else if ($_GET['page'] == 'view-edit-contact'){
	echo json_encode($employer -> getContactDetail($_POST['id']));
}
else if ($_GET['page'] == 'edit-contact-details'){
	echo $employer -> updateContactDetail($_POST, $_POST['id']);
}
else if ($_GET['page'] == 'swap-contact-type'){
	if($_POST['billing_contact'] == 1){

	}
	else{

	}
}
else if ($_GET['page'] == 'edit-employer-details'){
	echo $employer -> updateEmployer($_POST, $_POST['id']);
}
else if($_GET['page'] == 'get-billing-contacts'){
	echo json_encode($employer -> getBillingContact());
}
else if($_GET['page'] == 'view-edit'){
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
if($_GET['page'] != 'add-employer' && $_GET['page'] != 'contact-list' && $_GET['page'] != 'view-edit' && $_GET['page'] != 'get-direct-contacts' && $_GET['page'] != 'get-billing-contacts'  
	&& $_GET['page'] != 'remmove-contact' && $_GET['page'] != 'add-contact-new' && $_GET['page'] != 'view-edit-contact' && $_GET['page'] != 'edit-contact-details'
	&& $_GET['page'] != 'edit-employer-details' && $_GET['page'] != 'swap-contact-type'){
	
	require_once '../../includes/footer.php';
}

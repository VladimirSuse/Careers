<?php

session_start();

error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', '1');

//============================================================================================
// MODEL 
//============================================================================================
require_once '../../includes/Employer.php';
$employer = new Employer();
if($_GET['page'] != 'add' && $_GET['page'] != 'contact-list' && $_GET['page'] != 'view-edit' && $_GET['page'] != 'get-direct-contacts' && $_GET['page'] != 'get-billing-contacts'
    && $_GET['page'] != 'remmove-contact' && $_GET['page'] != 'add-contact-new' && $_GET['page'] != 'view-edit-contact' && $_GET['page'] != 'edit-contact-details'
    && $_GET['page'] != 'edit-employer-details' && $_GET['page'] != 'refresh-emp-table'){
	require_once '../../includes/header.php';
}
//============================================================================================
// Header and Nav
//============================================================================================
if($_GET['page'] != 'add' && $_GET['page'] != 'contact-list' && $_GET['page'] != 'view-edit' && $_GET['page'] != 'get-direct-contacts' && $_GET['page'] != 'get-billing-contacts' 
	&& $_GET['page'] != 'remmove-contact' && $_GET['page'] != 'add-contact-new' && $_GET['page'] != 'view-edit-contact' && $_GET['page'] != 'edit-contact-details'
	&& $_GET['page'] != 'edit-employer-details' && $_GET['page'] != 'refresh-emp-table'){
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
else if($_GET['page'] == 'get-direct-contacts'){
	echo json_encode($employer -> getDirectContact());
}
else if ($_Get['page'] == 'remove-contact'){
	if($_GET['type'] == 'direct'){

	}
	else if($_GET['type'] == 'billing'){

	}
}
else if ($_GET['page'] == 'add-contact-new'){
	
}
else if($_GET['page'] == 'refresh-emp-table'){
	echo json_encode($employer -> getAllEmployer());
} 
else if ($_GET['page'] == 'view-edit-contact'){
	echo json_encode($employer -> getContactDetail($_POST['id']));
}
else if ($_GET['page'] == 'edit-contact-details'){
	echo $employer -> updateContactDetail($_POST, $_POST['id']);
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
if($_GET['page'] != 'add' && $_GET['page'] != 'contact-list' && $_GET['page'] != 'view-edit' && $_GET['page'] != 'get-direct-contacts' && $_GET['page'] != 'get-billing-contacts'  
	&& $_GET['page'] != 'remmove-contact' && $_GET['page'] != 'add-contact-new' && $_GET['page'] != 'view-edit-contact' && $_GET['page'] != 'edit-contact-details'
	&& $_GET['page'] != 'edit-employer-details' && $_GET['page'] != 'refresh-emp-table'){
	require_once '../../includes/footer.php';
}

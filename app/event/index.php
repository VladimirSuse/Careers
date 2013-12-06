<?php

session_start();

error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', '1');

//============================================================================================
// MODEL 
//============================================================================================
require_once '../../includes/Employer.php';
$employer = new Employer();

$actions = array('add', 'view-edit','edit-event-details', 'toggle-service');
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
else if($_GET['page'] === 'add') {

}
else if($_GET['page'] === 'edit-event-details'){
	echo $employer -> updateEvent($_POST, $_POST['id']);
} 
else if($_GET['page'] === 'view-edit') {
    $allServices = $employer -> getService();
    $eventServices = $employer -> getEventService($_POST['id']);
    if(sizeOf($eventServices) > 0){
	    foreach($allServices as $key=>$s){
	    	foreach($eventServices as $service){
	    		if($s['id'] === $service['career_employer_service_id']){
					$allServices[$key]['used'] = '1';
					break;
				}  	
	    	}
	    }
	}
    echo json_encode( array('event_details' => $employer -> getEvent($_POST['id']),
    					   'service_list' => $allServices
    					   ));
}
else if($_GET['page'] === 'toggle-service') {
	if($_POST['state'] === 'true'){
		unset($_POST['state']);
		echo $employer -> saveEventService($_POST);
	}
	else{
		echo $employer -> removeEventService($_POST['career_employer_event_id']);
	}
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

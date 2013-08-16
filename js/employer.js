$(document).ready(function(){
	//initialze buttonset
	$('.buttonset').buttonset();
	
	$('#employer-table').dataTable({
		"iDisplayLength": 15,
        "aaSorting": [[0, "asc"]],
        "aoColumnDefs": [{
            "bSortable": false,
            "aTargets": [3]
        }]
	});

	$('#employer-table-abridged').dataTable({
		"iDisplayLength": 15,
        "aaSorting": [[0, "asc"]],
	});

	$('.loader').hide();
	$('#emp-table-container').fadeIn();
});

//handler for clicking the switch table view button
$('#table-switch-view').click(function(){
	switch($(this).attr('data-currview')){
		case "main":
			$('#main-table').hide();
			$('#miniTable-details').fadeIn();
			$(this).attr('data-currview', 'abridged');
			break;
		case "abridged":
			$('#miniTable-details').hide();
			$('#main-table').fadeIn();
			$(this).attr('data-currview', 'main');
			break;
	}
});

//handler for clicking add employer
$('#add-employer').click(function(){
	$('.topmenu').hide();
	$('#main-table').hide();
	$('#employer-form').fadeIn();
});
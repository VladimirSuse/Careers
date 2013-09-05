$(document).ready(function(){
	//initialze buttonset, chosen
	$('.chzn-select').chosen();
	$('.buttonset').buttonset();
	//initalize employer table
	$('#event-table').dataTable({
		"iDisplayLength": 15,
        "aaSorting": [[0, "asc"]],
        "aoColumnDefs": [{
            "bSortable": false,
            "aTargets": [3,4,5]
        }]
	});
	$('.loader').hide();
	$('#event-table-container').fadeIn();
});

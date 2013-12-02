$(document).ready(function(){
	//initialze buttonset, chosen
	$('.chzn-select').chosen();
	$('.buttonset').buttonset();
	//initalize event table
	initEventTable();
    initDatepickers();
	$('.loader').hide();
	$('#event-table-container').fadeIn();
});

//handler for when the user clicks add new event
$('#add-event').click(function(){
    $('.topmenu').hide();
    $('#main-table').hide();
    $('#back-to-table').fadeIn();
    $('#event-new-form').fadeIn();
});

//handler for wen the user clicks the top menu back button
$('#back-to-table').click(function(){
    $('.component').hide();
    $('.topmenu').fadeIn();
    $(this).hide();
    $('#main-table').fadeIn();
    clearInputs();
    
});

//handler for when the user clicks view/edit
$(document).on('click', 'view-edit', function(){
    $('.event-edit-input').val('');
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'index.php?page=view-edit',
        data: 'id=' + $(this).attr('data-event-id'),
        success: function(data){
            //populate all form data
            populateEditForm(data['event_details']);
            populateServices(data['services']);
            //reiniialize jquery ui and fade in the proper divs, resize windows
            $('.buttonset').buttonset();
            $('.topmenu').hide();
            $('.component').hide();
            $('#event-edit-form').fadeIn();
            $('#back-to-table').fadeIn();
        }
    });
});

//function which clears the inputs of all forms on current page
function clearInputs(){
    'use strict';
    $('.event-input').val('');
}

//function for initalizing the event table.
function initEventTable(){
    'use strict';
    $('#event-table').dataTable({
        "iDisplayLength": 15,
        "aaSorting": [[0, "asc"]],
        "aoColumnDefs": [{
            "bSortable": false,
            "aTargets": [3,4,5]
        }]
    });
}

//fucntion for initializing event date pickers
function initDatepickers(){ 
    'use strict';
    $('.date-pickers').datetimepicker({
        dateFormat: 'yy-mm-dd',
        timeFormat: 'hh:mm:ss',
    });
}

//function for populating the form for existing events
function populateEditForm(data){

}

//function for populating the form for existing event services
function populateServices(data){
    
}
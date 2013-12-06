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
$(document).on('click', '.view-edit', function(){
    $('.event-edit-input').val('');
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'index.php?page=view-edit',
        data: 'id=' + $(this).attr('data-event-id'),
        success: function(data){
            //populate all form data
            populateEditForm(data['event_details']);
            populateServices(data['service_list']);
            //reiniialize jquery ui and fade in the proper divs, resize windows

            $('.topmenu').hide();
            $('.component').hide();
            $('#event-edit-form').fadeIn();
            $('#back-to-table').fadeIn();
        }
    });
});

//handler for when the user edits a field in the event form
$('.event-edit-input').blur(function(){
    if($(this).val() != $(this).attr('data-current-value') ){
        $(this).attr('data-current-value', $(this).val());
        $.ajax({
            type:'post',
            url:'index.php?page=edit-event-details',
            data:'id=' + $('#edit_event_id').val() + "&" + $(this).attr('name') + "=" + $(this).val(),
            success: function(data){
                    $('#edit_event_id').attr('data-edited', 1);
                    showMessage('Event changes saved successfully.');
            }
        });
    }
});

//handler for when the user selects services
$('.buttonset input').click(function(){
    var state = $(this).prop('checked'); 
    $.ajax({
        type: 'post',
        dataType:'json',
        url: 'index.php?page=toggle-service',
        data: 'career_employer_service_id=' + $(this).val() +'&career_employer_event_id=' + $('#edit_event_id').val() + '&state=' + state,
        success: function(data){
            $('#edit_event_id').attr('data-edited', 1);
            showMessage('Employer changes saved successfully.');
        }
    });
}); 

function showMessage(message) {
    'use strict';
    $('.success-message').text(message);
    $('.success-message').animate({top: '8px', opacity: '1.0'}, 300, 'easeOutCubic').delay(1000).animate({top: '-35px', opacity: '0.0'}, 300, 'easeOutCubic');
}

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
    $('.event-edit-input').each(function(){
        $('#edit_event_' + $(this).attr('name')).val(data[0][$(this).attr('name')]);
        $('#edit_event_' + $(this).attr('name')).attr('data-current-value',data[0][$(this).attr('name')]);
    }); 
    $('#event-title').html(data[0].name_en);
   
}

//function for populating the form for existing event services
function populateServices(data){
    var content = '';
    $.each(data, function(){
        content+= "<div class='buttonset' style='display:inline-block;margin-right:1em'>" +
                                                "<input type='checkbox' id='" + "service" +  this.id + "' value='" + this.id + "' name='" + this.name_en +"'>" +
                                                "<label style='width:12em' for='" + "service" + this.id + "'>"+ this.name_en + "</label>" +
                                          "</div>";  
    });
    $('#event-services').html(content);
    $('.buttonset').buttonset();
    $.each(data, function(){
        if(this.used === '1'){
            console.log('#service' + this.id);
            $('#service' + this.id).attr('checked', true);
        }
    });
    $('.buttonset').buttonset('refresh');    
}
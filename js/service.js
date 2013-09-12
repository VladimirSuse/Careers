$(document).ready(function(){
	//initialze buttonset, chosen
	$('.chzn-select').chosen();
	$('.buttonset').buttonset();
	//initalize employer table
	$('#service-table').dataTable({
		"iDisplayLength": 15,
        "aaSorting": [[0, "asc"]],
        "aoColumnDefs": [{
            "bSortable": false,
            "aTargets": [3]
        }]
	});
	$('.loader').hide();
	$('#service-table-container').fadeIn();
});

//handler for when the user clicks delete on the services table
$('.delete').click(function(){
	var confirmDelete = confirm("Are you sure you want to delete this service?");
	if(confirmDelete){
		$.ajax({
			type:'post',
			url: 'index.php?page=remove-service',
			data: 'id=' + $(this).attr('data-service-id'),
			success: function(data){
				if(data){
					showMessage('Service deleted successfully');
					setTimeout(function(){ location.href = "index.php" }, 1000);
				}
			}
		});
	}
});

//handler for when the user clicks add on the services table
$('#add-service').click(function(){
	$('.topmenu').hide();
	$('#main-table').hide();
	$('#service-form').fadeIn();
	$('#back-to-table').fadeIn();
});

//handler for when the user clicks edit on the services table
$('.view-edit').click(function(){
    $('.service-edit-input').val('');
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'index.php?page=view-edit',
        data: 'id=' + $(this).attr('data-service-id'),
        success: function(data){
        	//populate text input fields
        	$('.edit-service-input').each(function(){
        		$('#edit_service_' + $(this).attr('name')).val(data[0][$(this).attr('name')]);
        		$('#edit_service_' + $(this).attr('name')).attr('data-current-value',data[0][$(this).attr('name')]);
        	});
        	
        	//reiniialize jquery ui and fade in the proper divs
  	      	$('#edit-service-title').html('Viewing ' + data[0].name_en);
  	      	$('.topmenu').hide();
			$('#main-table').hide();
			$('#service-edit-form').fadeIn();
			$('#back-to-table').fadeIn();
        }
    });
});

//handler for when the user modifies a field in the view edit dialog 
$('.edit-service-input').blur(function(){
	var elem = $(this);
	if(elem.val() != elem.attr('data-current-value') ){
		elem.attr('data-current-value', elem.val());
		$.ajax({
			type:'post',
			url:'index.php?page=edit-service',
			data:'id=' + $('#edit_service_id').val() + "&" + elem.attr('name') + "=" + elem.val(),
			success: function(data){
				if(data > 0){
					if(elem.attr('id').indexOf('name_en') != -1){
						$('#edit-service-title').html("Viewing " +$('#edit_service_name_en').val());
					}
					$('#edit_service_id').attr('data-edited', 1);
					showMessage('Service changes saved successfully.');
				}
			}
		});
	}
});

//handler for when the user clicks back on the top menu
$('#back-to-table').click(function(){
	if($('#edit_service_id').attr('data-edited') == 1){
		location.href = "index.php";
	}
	else{
		$('.service-input').val('');
		$('#service-form').hide();
		$('#service-edit-form').hide();
		$('.topmenu').fadeIn();
		$('#back-to-table').hide();
		$('#main-table').fadeIn();
	}
});

//handler for when the user clciks add service in the service form
$('#confirm-add').click(function(){
	$.ajax({
		type:'post',
		url: 'index.php?page=add-service',
		data: $('#service_form').serialize(),
		success: function(data){
			if(!isNaN(data)){
					showMessage('Service added successfully');
					setTimeout(function(){ location.href = "index.php?row=" +data }, 1000);
			}
		}
	});
});

function showMessage(message) {
    $('.success-message').text(message);
    $('.success-message').animate({top: '8px', opacity: '1.0'}, 300, 'easeOutCubic').delay(1000).animate({top: '-35px', opacity: '0.0'}, 300, 'easeOutCubic');
}


